import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import SurabayaBus from "./surabaya-bus";
import TransJBusPos from "./transj-bus";

const Map = () => {
  return (
    <MapContainer
      zoom={11}
      scrollWheelZoom={false}
      center={[-7.2575, 112.7521]}
      className={"full-height-container"}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TransJBusPos />
      <SurabayaBus />
    </MapContainer>
  );
};

export default Map;
