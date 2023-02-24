import { lazy, Suspense } from "react";
import { ClientOnly } from "~/components/lazy-load";
import MapFilter from "~/components/map-filter";

const Map = lazy(() => import("../components/map-wrapper"));

export default function Index() {
  return (
    <ClientOnly>
      <Suspense fallback="">
        <MapFilter />
        <Map />
      </Suspense>
    </ClientOnly>
  );
}
