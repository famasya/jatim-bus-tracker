import { Map, Marker as LMarker } from "leaflet";
import { RefObject, useEffect, useRef, useState } from "react";
import { Marker, Polyline, Popup } from "react-leaflet";
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import stc from "string-to-color";
import { useFilterState } from "~/common/states";
import { BusIcon } from "~/icons/bus";

import { BusStopIcon } from "~/icons/bus-stop";

import {
  SBusPositions,
  SBusPositionsResponse,
  SBusRouteMap,
  SBusStop,
  SbusStopResponse,
  TransJRoutes,
} from "~/interfaces/common";
import TimetableModal from "./timetable-modal";

const routesMap: SBusRouteMap[] = [
  {
    id: 1,
    track: "Purabaya - Rajawali",
  },
  {
    id: 3,
    track: "Bus Tumpuk",
  },
  {
    id: 6,
    track: "TIJ - TOW",
  },
];

export default function SurabayaBus(props: { mapRef: RefObject<Map> }) {
  const markerRef = useRef<Array<LMarker | null>>([]);
  const [busStops, setBusStops] = useState<SBusStop[]>([]);
  const [busRoutes, setBusRoutes] = useState<TransJRoutes[]>([]);
  const [busPositions, setBusPositions] = useState<SBusPositions[]>([]);

  const {
    showSBusStops,
    autoUpdateSBus,
    showSBus,
    storeBusStops,
    selectedBusStop,
  } = useFilterState((state) => state);

  const loadSBusStops = async () => {
    const resource = await fetch(
      `${window.ENV.SBUS_TRACKER_ENDPOINT}/sbus-stops`
    );
    const locations = (await resource.json()) as SbusStopResponse[];
    return locations;
  };

  const loadSBusPositions = async () => {
    const filters = routesMap.map((route) => route.id).join(",");
    const resource = await fetch(
      `${window.ENV.SBUS_TRACKER_ENDPOINT}/sbus-positions?filter=${filters}`
    );
    const positions = (await resource.json()) as SBusPositionsResponse[];
    return positions;
  };

  const autoLoadPosition = () => {
    loadSBusPositions().then((currentPositions) => {
      const allPositions = currentPositions.map((pos) => pos.positions).flat();
      const sortedPositions = allPositions.sort((a, b) =>
        a.info.localeCompare(b.info)
      );
      setBusPositions(
        sortedPositions.map((pos) => ({
          ...pos,
          tracked_at: new Date().toString(),
        }))
      );
      console.info("SBus Updated at " + new Date().toLocaleTimeString());
    });
  };

  if (autoUpdateSBus) {
    setInterval(() => {
      autoLoadPosition();
    }, 10 * 1000);
  }

  useEffect(() => {
    loadSBusStops().then((stops) => {
      const allStops: SBusStop[] = [];
      stops.map((stop) => {
        const track = routesMap.find((route) => route.id == parseInt(stop.key));
        if (track) {
          stop.stops.map((stop) => {
            storeBusStops("Suroboyo Bus", track.track, stop.nama);
            allStops.push({ ...stop, track: track.track });
          });
          setBusRoutes((routes) => [
            ...routes,
            {
              coordinate: stop.stops.map((loc) => [
                parseFloat(loc.lat),
                parseFloat(loc.lon),
              ]),
              track: track.track,
            },
          ]);
        }
      });
      setBusStops(allStops);
    });

    if (selectedBusStop) {
      const map = props.mapRef.current;
      const marker = markerRef.current;
      const stopIdx = busStops.findIndex(
        (stop) => stop.nama == selectedBusStop
      );
      if (stopIdx > -1 && map && marker) {
        map.flyTo(
          [
            parseFloat(busStops[stopIdx].lat),
            parseFloat(busStops[stopIdx].lon),
          ],
          13
        );
        marker[stopIdx]?.openPopup();
      }
    }

    autoLoadPosition();
  }, [selectedBusStop]);

  return (
    <div key={"sbus-pos-map"}>
      {busRoutes.map((route, i) => {
        return (
          <Polyline
            key={i}
            pathOptions={{ color: stc(route.track), opacity: 0.9, weight: 5 }}
            positions={route.coordinate}
          />
        );
      })}

      {/* Bus positions */}
      {showSBus &&
        busPositions.map((pos, index) => {
          return (
            <ReactLeafletDriftMarker
              duration={1000}
              key={"mp" + index}
              position={[parseFloat(pos.lat), parseFloat(pos.lng)]}
              icon={BusIcon({ color: "red" })}
            >
              <Popup key={"pp" + index}>
                <h4>{pos.info}</h4>
                <p>Synced: {pos.tracked_at}</p>
              </Popup>
            </ReactLeafletDriftMarker>
          );
        })}

      {/* Bus stops */}
      {showSBusStops &&
        busStops.map((stop, index) => {
          return (
            <Marker
              ref={(el) => (markerRef.current[index] = el)}
              key={"m" + index}
              position={[parseFloat(stop.lat), parseFloat(stop.lon)]}
              icon={BusStopIcon({ color: "blue" })}
            >
              <Popup key={"p" + index}>
                <h4>{stop.nama}</h4>
                <p>{stop.description}</p>
                <TimetableModal content={stop.timetable} />
              </Popup>
            </Marker>
          );
        })}
    </div>
  );
}
