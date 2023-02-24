/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

export {};
declare global {
  interface Window {
    ENV: {
      SBUS_TRACKER_ENDPOINT: string;
      TRANSJ_TRACKER_ENDPOINT: string;
    };
  }
}
