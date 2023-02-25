import { TabBar } from "antd-mobile";
import {
  CompassOutline,
  ContentOutline,
  FaceRecognitionOutline,
} from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  {
    key: "/",
    title: "Peta",
    icon: <CompassOutline />,
  },
  {
    key: "/city-bus-routes",
    title: "Rute Bus Kota",
    icon: <ContentOutline />,
  },
  {
    key: "/about",
    title: "Tentang",
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
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}
