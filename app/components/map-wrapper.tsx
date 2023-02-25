import { Map as LMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapFilter from "./map-filter";
import SurabayaBus from "./surabaya-bus";
import TransJBusPos from "./transj-bus";

const Map = () => {
  const mapRef = useRef<LMap>(null);

  return (
    <MapContainer
      zoom={11}
      ref={mapRef}
      scrollWheelZoom={true}
      center={[-7.2575, 112.7521]}
      className={"full-height-container"}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TransJBusPos mapRef={mapRef} />
      <SurabayaBus mapRef={mapRef} />
      <MapFilter />
    </MapContainer>
  );
};

export default Map;
