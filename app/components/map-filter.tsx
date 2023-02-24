import { FloatingBubble, List, Popup, Switch } from "antd-mobile";
import { SetOutline } from "antd-mobile-icons";
import { useState } from "react";
import { useFilterState } from "~/common/states";

export default function MapFilter() {
  const [filterPopup, toggleFilterPopup] = useState(false);
  const {
    toggleAutoUpdateSBus,
    toggleSBusStops,
    toggleTransJStops,
    toggleSBus,
    toggleTransJ,
    autoUpdateSBus,
    showSBus,
    showTransJ,
    showSBusStops,
    showTransJStops,
  } = useFilterState((state) => state);

  return (
    <>
      <FloatingBubble
        style={{
          "--initial-position-bottom": "60px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
          zIndex: 999,
          position: "absolute",
        }}
      >
        <SetOutline fontSize={32} onClick={() => toggleFilterPopup(true)} />
      </FloatingBubble>

      <Popup
        visible={filterPopup}
        position={"right"}
        onMaskClick={() => {
          toggleFilterPopup(false);
        }}
        style={{ zIndex: 9999 }}
      >
        <div style={{ background: "#f5f5f5", height: "100%" }}>
          <List
            mode="card"
            header="General"
            style={{ marginTop: 0, minWidth: "30vw" }}
          >
            <List.Item
              extra={
                <Switch
                  defaultChecked={autoUpdateSBus}
                  onChange={toggleAutoUpdateSBus}
                />
              }
            >
              Auto update Suroboyo-Bus
            </List.Item>
          </List>

          <List
            mode="card"
            header="Bus Positions"
            style={{ marginTop: 0, minWidth: "30vw" }}
          >
            <List.Item
              extra={<Switch defaultChecked={showSBus} onChange={toggleSBus} />}
            >
              Suroboyo-Bus
            </List.Item>
            <List.Item
              extra={
                <Switch defaultChecked={showTransJ} onChange={toggleTransJ} />
              }
            >
              Trans Jatim
            </List.Item>
          </List>

          <List
            mode="card"
            header="Bus Stops"
            style={{ marginTop: 0, minWidth: "30vw" }}
          >
            <List.Item
              extra={
                <Switch
                  defaultChecked={showSBusStops}
                  onChange={toggleSBusStops}
                />
              }
            >
              Suroboyo-Bus
            </List.Item>
            <List.Item
              extra={
                <Switch
                  defaultChecked={showTransJStops}
                  onChange={toggleTransJStops}
                />
              }
            >
              Trans Jatim
            </List.Item>
          </List>
        </div>
      </Popup>
    </>
  );
}
