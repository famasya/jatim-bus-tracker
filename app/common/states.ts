import { create } from "zustand";

interface BusStop {
  type: string;
  track: string;
  name: string;
}
interface FilterState {
  autoUpdateSBus: boolean;
  showSBusStops: boolean;
  showSBus: boolean;
  showTransJ: boolean;
  showTransJStops: boolean;
  selectedBusStop: string | null;
  busStops: BusStop[];
  setSelectedBusStop: (name: string) => void;
  toggleAutoUpdateSBus: () => void;
  toggleSBusStops: () => void;
  toggleTransJStops: () => void;
  toggleSBus: () => void;
  toggleTransJ: () => void;
  storeBusStops: (
    type: BusStop["type"],
    track: BusStop["track"],
    name: string
  ) => void;
}

export const useFilterState = create<FilterState>((set) => ({
  autoUpdateSBus: false,
  showSBusStops: true,
  showSBus: true,
  showTransJ: true,
  showTransJStops: true,
  selectedBusStop: null,
  busStops: [],
  setSelectedBusStop: (name) => set(() => ({ selectedBusStop: name })),
  storeBusStops: (type, track, name) =>
    set((state) => {
      const exist = state.busStops.find((current) => current.name == name);
      if (!exist) {
        state.busStops.push({
          track: track,
          type: type,
          name: name,
        });
      }
      return state;
    }),
  toggleAutoUpdateSBus: () =>
    set((state) => ({ autoUpdateSBus: !state.autoUpdateSBus })),
  toggleSBusStops: () =>
    set((state) => ({ showSBusStops: !state.showSBusStops })),
  toggleTransJStops: () =>
    set((state) => ({ showTransJStops: !state.showTransJStops })),
  toggleSBus: () => set((state) => ({ showSBus: !state.showSBus })),
  toggleTransJ: () => set((state) => ({ showTransJ: !state.showTransJ })),
}));
