import { FloatingBubble, TabBar } from "antd-mobile";
import {
  FaceRecognitionOutline,
  FilterOutline,
  TravelOutline,
} from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  {
    key: "/",
    title: "Home",
    icon: <TravelOutline />,
  },
  {
    key: "/about",
    title: "About",
    icon: <FaceRecognitionOutline />,
  },
];

export default function BottomPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };
  return (
    <>
      <FloatingBubble
        style={{
          "--initial-position-bottom": "60px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
          zIndex: 9999,
          position: "absolute",
        }}
      >
        <FilterOutline fontSize={32} />
      </FloatingBubble>
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}
