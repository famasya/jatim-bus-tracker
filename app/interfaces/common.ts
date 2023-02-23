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

export interface SBusStop {
  uniqid: string;
  nama: string;
  description: string;
  lat: string;
  lon: string;
  arah: number;
  priority: number;
  timetable: string;
}

export interface SbusStopResponse {
  key: string;
  stops: SBusStop[];
}
