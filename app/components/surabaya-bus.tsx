import { useEffect, useState } from "react";
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

export default function SurabayaBus() {
  const [busStops, setBusStops] = useState<SBusStop[]>([]);
  const [busPositions, setBusPositions] = useState<SBusPositions[]>([]);
  const { showSBusStops, autoUpdateSBus, showSBus } = useFilterState(
    (state) => state
  );

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
      const allStops = stops.map((stop) => stop.stops);
      setBusStops(allStops.flat());
    });

    autoLoadPosition();
  }, []);

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
              key={"m" + index}
              position={[parseFloat(stop.lat), parseFloat(stop.lon)]}
              icon={BusStopIcon({ color: "blue" })}
            >
              <Popup key={"p" + index}>
                <h4>{stop.nama}</h4>
                <p>{stop.description}</p>
              </Popup>
            </Marker>
          );
        })}
    </div>
  );
}
