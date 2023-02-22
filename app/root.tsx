import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { NavBar } from "antd-mobile";
import styles from "antd-mobile/bundle/style.css";
import BottomFloatingPanel from "~/components/bottom-floating-panel";
import global from "~/style.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: global },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="app">
          <div className="top">
            <NavBar>Map</NavBar>
          </div>
          <div style={{ height: "100vh" }}>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
          <div className="bottom">
            <BottomFloatingPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
