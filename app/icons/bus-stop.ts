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

export const BusStopIcon = (options: {
  color?: IconColor;
  size?: [number, number];
}): Icon<IconOptions> => {
  return new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${
      options.color ?? "red"
    }.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: options.size ?? [17, 27],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [27, 27],
  });
};
