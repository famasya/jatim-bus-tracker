import { json, LoaderArgs, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
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
  title: "Peta Bus Jatim",
  description: "Peta Bus Jatim Realtime, Suroboyo Bus dan Trans Jatim",
  viewport: "width=device-width,initial-scale=1,maximum-scale=1",
});

export const useBrowserLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export async function loader({ context }: LoaderArgs) {
  return json({
    ENV: {
      TRANSJ_TRACKER_ENDPOINT: context.TRANSJ_TRACKER_ENDPOINT,
      SBUS_TRACKER_ENDPOINT: context.SBUS_TRACKER_ENDPOINT,
      SBUS_TRACKER_REV_PROX: context.SBUS_TRACKER_REV_PROX,
    },
  });
}

export default function App() {
  const useWindowSize = () => {
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
  };
  const [, windowHeight] = useWindowSize();
  const data = useLoaderData<typeof loader>();

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
              Peta Bus Jatim
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <script
          async
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "108666c2351e440fbcd42a903db8f8dc"}'
        />
        <Scripts />
      </body>
    </html>
  );
}
