import { TabBar } from "antd-mobile";
import {
  ContentOutline,
  FaceRecognitionOutline,
  TravelOutline,
} from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";
import MapFilter from "./map-filter";

const tabs = [
  {
    key: "/",
    title: "Home",
    icon: <TravelOutline />,
  },
  {
    key: "/city-bus-routes",
    title: "City Bus Routes",
    icon: <ContentOutline />,
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
      <MapFilter />
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}
