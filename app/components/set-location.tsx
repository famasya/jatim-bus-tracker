import { Button, CheckList, Popup, SearchBar, Space, Tag } from "antd-mobile";
import { useMemo, useState } from "react";
import stc from "string-to-color";
import { useFilterState } from "~/common/states";

export default function SetLocation() {
  const [selectorVisible, toggleSelector] = useState(false);
  const [searchText, setSearchText] = useState("");
  const {
    busStops,
    selectedBusStop,
    setSelectedBusStop,
    showSBusStops,
    showTransJStops,
  } = useFilterState((state) => state);

  const filteredStops = useMemo(() => {
    if (searchText) {
      return busStops.filter((stop) =>
        stop.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return busStops.filter((stop) => {
        if (showSBusStops && stop.type == "Suroboyo Bus") return stop;
        if (showTransJStops && stop.type == "Trans Jatim") return stop;
      });
    }
  }, [busStops, searchText, showSBusStops, showTransJStops]);

  return (
    <>
      <Space align="center">
        <Button
          onClick={() => toggleSelector(!selectorVisible)}
          loading={busStops.length < 1}
        >
          Pilih lokasi halte
        </Button>
        {selectedBusStop ? selectedBusStop.substring(0, 12) + "..." : null}
      </Space>

      <Popup
        style={{ zIndex: 9999999 }}
        visible={selectorVisible}
        onMaskClick={() => {
          toggleSelector(false);
        }}
        destroyOnClose
      >
        <div>
          <SearchBar
            className="searchBarContainer"
            placeholder="Search bus stop"
            value={searchText}
            onChange={(v) => {
              setSearchText(v);
            }}
          />
        </div>
        <div className="checkListContainer">
          <CheckList
            className="myCheckList"
            defaultValue={selectedBusStop ? [selectedBusStop] : []}
            onChange={(val) => {
              setSelectedBusStop(val[0]);
              toggleSelector(false);
            }}
          >
            {filteredStops.map((stop, i) => (
              <CheckList.Item key={stop.name} value={stop.name}>
                <Tag color={stc(stop.track)}>
                  {stop.type} - [{stop.track}]
                </Tag>
                - {stop.name}
              </CheckList.Item>
            ))}
          </CheckList>
        </div>
      </Popup>
    </>
  );
}
