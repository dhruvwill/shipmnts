import { createStore } from "zustand/vanilla";
import { AppState, AppStore, AppActions } from "@/types/store";

export const initAppStore = (): AppState => {
  return { value: false };
};

export const defaultAppState = {
  value: false,
};

export const createAppStore = (initState: AppState = defaultAppState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setValue: (value) => {
      console.log(value);
      set((state) => ({ ...state, value: value }));
    },
  }));
};
