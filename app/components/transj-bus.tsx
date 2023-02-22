import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Polyline, Popup } from "react-leaflet";
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import { io, Socket } from "socket.io-client";
import { BusIcon } from "~/icons/bus";
import { BusStopIcon } from "~/icons/bus-stop";
import { TransJBusStop } from "~/interfaces/common";
import { TransJEvent } from "~/interfaces/transj-event";
import routes from "~/static/routes.json";
import stops from "~/static/transj-bus-stops.json";

const busRoutes = routes as LatLngExpression[];
const busStops = stops as TransJBusStop[];

export default function TransJBusPos() {
  const [positions, setPositions] = useState<TransJEvent[]>([]);

  const loadTransJPositions = async () => {
    const resource = await fetch(
      "https://transj-rev-prox.abidf.my.id/api/findAll",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "ngiraya" }),
      }
    );
    const results = (await resource.json()) as { data: TransJEvent[] };
    return results.data;
  };

  useEffect(() => {
    loadTransJPositions()
      .then((results) => {
        setPositions(results);
      })
      .then(() => {
        const socket: Socket = io("https://transj-rev-prox.abidf.my.id");
        socket.on("update_jatim", (event: TransJEvent) => {
          setPositions((positions) =>
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
  }, []);

  return (
    <div key={"transj-pos-map"}>
      <Polyline
        pathOptions={{ color: "black", opacity: 0.6 }}
        positions={busRoutes}
      />

      {/* Bus pos */}
      {positions.map((pos, index) => {
        return (
          <ReactLeafletDriftMarker
            duration={1000}
            key={"m" + index}
            position={[pos.lat, pos.lng]}
            icon={BusIcon}
          >
            <Popup key={"p" + index}>
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
      {busStops.map((stop, index) => {
        return (
          <Marker
            key={"m" + index}
            position={[stop.sh_lat, stop.sh_lng]}
            icon={BusStopIcon("yellow")}
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
