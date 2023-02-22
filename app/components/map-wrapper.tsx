import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import TransJBusPos from "./transj-bus";

const Map = () => {
  return (
    <MapContainer
      zoom={11}
      scrollWheelZoom={false}
      center={[-7.2575, 112.7521]}
      style={{ height: "calc(100vh - 96px)" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TransJBusPos />
    </MapContainer>
  );
};

export default Map;
