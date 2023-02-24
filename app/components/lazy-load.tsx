import { ReactNode, useEffect, useState } from "react";

export function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    <>{children}</>
  ) : (
    <div style={{ height: "100%", textAlign: "center" }}>
      <h4>Memuat peta...</h4>
    </div>
  );
}
