import { Button, Popup, Space } from "antd-mobile";
import { QuestionCircleOutline } from "antd-mobile-icons";
import { useState } from "react";

export default function NavBarRightPanel() {
  const [helpPopup, toggleHelpPopup] = useState(false);

  return (
    <div>
      <Space style={{ "--gap": "16px" }}>
        <Button
          style={{ border: "none" }}
          onClick={() => toggleHelpPopup(true)}
        >
          <QuestionCircleOutline fontSize={24} />
        </Button>
      </Space>

      <Popup
        visible={helpPopup}
        onMaskClick={() => {
          toggleHelpPopup(false);
        }}
        bodyStyle={{
          minHeight: "20vh",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <div style={{ padding: 10 }}>
          <h4>How to use</h4>
          <ol>
            <li>Turn on "auto-refresh" on the top right panel, or</li>
            <li>Pull to refresh latest location</li>
          </ol>
        </div>
      </Popup>
    </div>
  );
}
