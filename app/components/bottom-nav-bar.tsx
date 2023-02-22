import { TabBar } from "antd-mobile";
import { InformationCircleOutline, TravelOutline } from "antd-mobile-icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function BotomNavBar() {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history(value);
  };

  const tabs = [
    {
      key: "/",
      title: "Map",
      icon: <TravelOutline />,
    },
    {
      key: "/about",
      title: "About",
      icon: <InformationCircleOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}
