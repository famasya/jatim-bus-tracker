import { Space } from "antd-mobile";
import { useState } from "react";

export default function NavBarLeftPanel() {
  const [autoRefresh, toggleAutoRefresh] = useState(false);

  return (
    <div>
      <Space style={{ "--gap": "16px" }}></Space>
    </div>
  );
}
