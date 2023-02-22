import { FloatingPanel, SearchBar, Space } from "antd-mobile";

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
];
const anchors = [50, 400];
export default function BottomFloatingPanel() {
  return (
    <div style={{ zIndex: 999 }}>
      <FloatingPanel anchors={anchors}>
        <Space block justify="center" className="search-container">
          <SearchBar placeholder="Search for routes" />
        </Space>
      </FloatingPanel>
    </div>
  );
}
