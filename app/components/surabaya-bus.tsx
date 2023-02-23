import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { BusStopIcon } from "~/icons/bus-stop";
import { SBusStop, SbusStopResponse } from "~/interfaces/common";

export default function SurabayaBus() {
  const [busStops, setBusStops] = useState<SBusStop[]>([]);

  const loadSBusStops = async () => {
    const resource = await fetch(
      "https://bus-tracker.workers.abidf.my.id/sbus-stops"
    );
    const results = (await resource.json()) as SbusStopResponse[];
    return results;
  };

  useEffect(() => {
    loadSBusStops().then((stops) => {
      const allStops = stops.map((stop) => stop.stops);
      setBusStops(allStops.flat());
    });
  }, []);

  return (
    <div key={"sbus-pos-map"}>
      {/* Bus stops */}
      {busStops.map((stop, index) => {
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
