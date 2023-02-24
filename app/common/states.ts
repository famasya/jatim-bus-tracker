import { create } from "zustand";

interface FilterState {
  autoUpdateSBus: boolean;
  showSBusStops: boolean;
  showSBus: boolean;
  showTransJ: boolean;
  showTransJStops: boolean;
  toggleAutoUpdateSBus: () => void;
  toggleSBusStops: () => void;
  toggleTransJStops: () => void;
  toggleSBus: () => void;
  toggleTransJ: () => void;
}

export const useFilterState = create<FilterState>((set) => ({
  autoUpdateSBus: false,
  showSBusStops: true,
  showSBus: true,
  showTransJ: true,
  showTransJStops: true,
  toggleAutoUpdateSBus: () =>
    set((state) => ({ autoUpdateSBus: !state.autoUpdateSBus })),
  toggleSBusStops: () =>
    set((state) => ({ showSBusStops: !state.showSBusStops })),
  toggleTransJStops: () =>
    set((state) => ({ showTransJStops: !state.showTransJStops })),
  toggleSBus: () => set((state) => ({ showSBus: !state.showSBus })),
  toggleTransJ: () => set((state) => ({ showTransJ: !state.showTransJ })),
}));
