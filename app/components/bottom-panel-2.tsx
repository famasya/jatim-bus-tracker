import { FloatingPanel, SearchBar, Selector, Space } from "antd-mobile";

const anchors = [70, 200];

const options = [
  {
    label: "asdf",
    value: 1,
  },
];

export default function BottomPanel() {
  return (
    <FloatingPanel anchors={anchors}>
      <div className="floating-bottom">
        <Space block className="search-container">
          <SearchBar placeholder="Search for a place or address" />
        </Space>
        <div style={{ marginTop: 10 }}>
          <span style={{ display: "block" }}>Hlele</span>
          <Selector options={options} multiple={true} />
        </div>
      </div>
    </FloatingPanel>
  );
}
