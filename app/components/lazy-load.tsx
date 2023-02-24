import { Skeleton } from "antd-mobile";
import { ReactNode, useEffect, useState } from "react";

export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    <>{children}</>
  ) : (
    <>
      <Skeleton
        animated
        style={{
          "--width": "100%",
          "--height": "100%",
        }}
      />
    </>
  );
}
