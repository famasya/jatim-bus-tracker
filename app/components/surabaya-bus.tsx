import { Map, Marker as LMarker } from "leaflet";
import { RefObject, useEffect, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import { useFilterState } from "~/common/states";
import { BusIcon } from "~/icons/bus";
import { BusStopIcon } from "~/icons/bus-stop";

import {
  SBusPositions,
  SBusPositionsResponse,
  SBusStop,
  SbusStopResponse,
} from "~/interfaces/common";
import TimetableModal from "./timetable-modal";

export default function SurabayaBus(props: { mapRef: RefObject<Map> }) {
  const markerRef = useRef<Array<LMarker | null>>([]);
  const [busStops, setBusStops] = useState<SBusStop[]>([]);
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
    const resource = await fetch(
      `${window.ENV.SBUS_TRACKER_ENDPOINT}/sbus-positions`
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
      const allStops = stops.map((stop) => stop.stops).flat();
      setBusStops(allStops);
      allStops.map((stop) => storeBusStops("Suroboyo Bus", stop.nama));
    });

    if (selectedBusStop) {
      const map = props.mapRef.current;
      const marker = markerRef.current;
      const stopIdx = busStops.findIndex(
        (stop) => stop.nama == selectedBusStop
      );
      if (stopIdx > 0 && map && marker) {
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
