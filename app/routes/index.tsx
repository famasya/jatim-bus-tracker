import { lazy, Suspense } from "react";
import { ClientOnly } from "~/components/lazy-load";

const Map = lazy(() => import("../components/map-wrapper"));

export default function Index() {
  return (
    <ClientOnly>
      <Suspense fallback="">
        <Map />
      </Suspense>
    </ClientOnly>
  );
}
