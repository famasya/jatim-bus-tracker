import { Icon } from "leaflet";

export const BusIcon = (options: {
  size?: [number, number];
  color?: "red" | "orange";
}) => {
  let iconUrl;
  switch (options.color) {
    case "red":
      iconUrl = require("./bus(2).svg");
      break;
    case "orange":
      iconUrl = require("./bus(4).svg");
      break;
    default:
      iconUrl = require("./bus(2).svg");
      break;
  }

  return new Icon({
    iconUrl: iconUrl, //https://iconscout.com/icon/bus-359
    iconRetinaUrl: iconUrl,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: options.size ?? [40, 40],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  });
};
