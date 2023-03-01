import { Map, Marker as LMarker } from "leaflet";
import { RefObject, useEffect, useRef, useState } from "react";
import { Marker, Polyline, Popup } from "react-leaflet";
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import { io, Socket } from "socket.io-client";
import stc from "string-to-color";
import { useFilterState } from "~/common/states";
import { BusIcon } from "~/icons/bus";
import { BusStopIcon } from "~/icons/bus-stop";
import { TransJBusStop, TransJRoutes } from "~/interfaces/common";
import { TransJEvent } from "~/interfaces/transj-event";
import stops from "~/static/transj-bus-stops.json";
import routes from "~/static/transj-routes.json";

// const busRoutes = routes.JTM1 as LatLngExpression[];
const busRoutes = routes as TransJRoutes[];
const busStops = stops as TransJBusStop[];

export default function TransJBusPos(props: { mapRef: RefObject<Map> }) {
  const markerRef = useRef<Array<LMarker | null>>([]);
  const [busPositions, setBusPositions] = useState<TransJEvent[]>([]);
  const { showTransJStops, showTransJ, storeBusStops, selectedBusStop } =
    useFilterState((state) => state);

  const loadTransJPositions = async () => {
    const resource = await fetch(
      `${window.ENV.TRANSJ_TRACKER_ENDPOINT}/api/findAll`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "https://jatimbus.workers.dev",
          Referer: "https://jatimbus.workers.dev",
        },
        body: JSON.stringify({ key: "ngiraya" }),
      }
    );
    const results = (await resource.json()) as { data: TransJEvent[] };
    return results.data;
  };

  useEffect(() => {
    busStops.map((stop) =>
      storeBusStops("Trans Jatim", stop.kor, stop.sh_name)
    );
    loadTransJPositions()
      .then((results) => {
        setBusPositions(results);
      })
      .then(() => {
        const socket: Socket = io(`${window.ENV.TRANSJ_TRACKER_ENDPOINT}`);
        socket.on("update_jatim", (event: TransJEvent) => {
          setBusPositions((positions) =>
            positions.map((item, i) => {
              if (item.id === event.id) {
                item["lat"] = event.lat;
                item["lng"] = event.lng;
              }
              return item;
            })
          );
        });
      });

    if (selectedBusStop) {
      const marker = markerRef.current;
      const stopIdx = busStops.findIndex(
        (stop) => stop.sh_name == selectedBusStop
      );
      const map = props.mapRef.current;
      if (stopIdx > -1 && map && marker) {
        map.flyTo([busStops[stopIdx].sh_lat, busStops[stopIdx].sh_lng], 13);
        marker[stopIdx]?.openPopup();
      }
    }
  }, [selectedBusStop]);

  return (
    <div key={"transj-pos-map"}>
      {busRoutes.map((route, i) => {
        return (
          <Polyline
            key={i}
            pathOptions={{ color: stc(route.track), opacity: 0.9, weight: 5 }}
            positions={route.coordinate}
          />
        );
      })}

      {/* Bus pos */}
      {showTransJ &&
        busPositions.map((pos, index) => {
          return (
            <ReactLeafletDriftMarker
              duration={1000}
              key={"mp" + index}
              position={[pos.lat, pos.lng]}
              icon={BusIcon({ color: "orange" })}
            >
              <Popup key={"pp" + index}>
                <h4>
                  {pos.plate_number} ({pos.name})
                </h4>
                <p>
                  Passenger : {pos.passenger} <br />
                  Synced : {pos.dt_tracker}
                </p>
              </Popup>
            </ReactLeafletDriftMarker>
          );
        })}

      {/* Bus stops */}
      {showTransJStops &&
        busStops.map((stop, index) => {
          return (
            <Marker
              ref={(el) => (markerRef.current[index] = el)}
              key={"m" + index}
              position={[stop.sh_lat, stop.sh_lng]}
              icon={BusStopIcon({ color: "yellow" })}
            >
              <Popup key={"p" + index}>
                <h4>{stop.sh_name}</h4>
                <p>
                  From : {stop.origin} <br /> To : {stop.toward}
                </p>
              </Popup>
            </Marker>
          );
        })}
    </div>
  );
}
