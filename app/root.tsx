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
import { useLayoutEffect, useState } from "react";
import BottomPanel from "~/components/bottom-panel";
import global from "~/style.css";
import NavBarLeftPanel from "./components/navbar-left-panel";
import NavBarRightPanel from "./components/navbar-right-panel";

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
  viewport: "width=device-width,initial-scale=1,maximum-scale=1",
});

export const useBrowserLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export default function App() {
  function useWindowSize() {
    // handle viewport overflow on mobile https://stackoverflow.com/a/62794939
    const [size, setSize] = useState([0, 0]);
    useBrowserLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [, windowHeight] = useWindowSize();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="app">
          <div className="top">
            <NavBar
              right={<NavBarRightPanel />}
              left={<NavBarLeftPanel />}
              backArrow={false}
            >
              Map
            </NavBar>
          </div>
          <div style={{ height: windowHeight - 96 }}>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
          <div className="bottom">
            <BottomPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
