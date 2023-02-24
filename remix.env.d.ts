/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

export {};
declare global {
  interface Window {
    ENV: {
      SBUS_TRACKER_ENDPOINT: string;
      TRANSJ_TRACKER_ENDPOINT: string;
      SBUS_TRACKER_REV_PROX: string;
    };
  }
}
