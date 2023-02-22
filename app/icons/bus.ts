import { Icon } from "leaflet";

export const BusIcon = new Icon({
  iconUrl: require("./bus(2).svg"), //https://iconscout.com/icon/bus-359
  iconRetinaUrl: require("~/icons/bus(2).svg"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});
