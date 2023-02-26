import { LatLngExpression } from "leaflet";

export interface BusPosition {
  id: string;
  info: string;
  lat: string;
  lng: string;
  direction: string;
}

export interface TransJBusStop {
  sh_id: number;
  sh_name: string;
  kor: string;
  origin: string;
  toward: string;
  sh_lat: number;
  sh_lng: number;
  tw_lat: number;
  tw_lng: number;
}

export interface TransJRoutes {
  track: string;
  coordinate: LatLngExpression[];
}

export interface SBusStop {
  uniqid: string;
  nama: string;
  track?: string;
  description: string;
  lat: string;
  lon: string;
  arah: number;
  priority: number;
  timetable: string;
}

export interface SBusRouteMap {
  track: string;
  id: number;
}

export interface SbusStopResponse {
  key: string;
  stops: SBusStop[];
}

export interface SBusPositions {
  info: string;
  lat: string;
  lng: string;
  tracked_at?: string;
  direction: number;
  active?: number;
  kuning?: number;
}

export interface SBusPositionsResponse {
  key: "bustracktij" | "bustracktumpuk" | "bustrackutara";
  positions: SBusPositions[];
}
