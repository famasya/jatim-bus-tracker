import { Icon, IconOptions } from "leaflet";

type IconColor =
  | "green"
  | "blue"
  | "gold"
  | "red"
  | "orange"
  | "yellow"
  | "violet"
  | "grey"
  | "black";

export const BusStopIcon = (color: IconColor): Icon<IconOptions> => {
  return new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [20, 36],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};
