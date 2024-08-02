import { createAppStore } from "@/store/store";

export type AppState = {
  value: boolean;
};
export type AppActions = {
  setValue: (value: boolean) => void;
};

export type AppStore = AppState & AppActions;

export type AppStoreApi = ReturnType<typeof createAppStore>;
