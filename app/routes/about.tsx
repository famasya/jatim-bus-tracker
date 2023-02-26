import { Button, Space } from "antd-mobile";
import { LinkOutline } from "antd-mobile-icons";

export default function About() {
  return (
    <div className={"full-height-container"} style={{ padding: 10 }}>
      <p>
        Situs ini dibuat dengan kode sumber terbuka (open source). Jika Anda
        tertarik, silakan buat <i>Pull Request</i> pada repository aplikasi ini.
      </p>
      <p>
        <strong>Kredit</strong>
        <ul>
          <li>
            Ikon oleh{" "}
            <a href="https://iconscout.com/icon/bus-359" className="href">
              IconScout
            </a>
          </li>
          <li>
            Peta oleh{" "}
            <a href="https://https://www.openstreetmap.org" className="href">
              OpenStreetMap
            </a>
          </li>
        </ul>
      </p>
      <Space>
        <a
          href="https://github.com/famasya/jatim-bus-tracker"
          target={"_blank"}
        >
          <Button size="small">
            <LinkOutline /> Repository (Github)
          </Button>
        </a>
        <a href="https://twitter.com/famasya" target={"_blank"}>
          <Button size="small">
            <LinkOutline /> Twitter
          </Button>
        </a>
        <a href="https://tally.so/r/nG6pOZ" target={"_blank"}>
          <Button size="small">
            <LinkOutline /> Kirim masukan
          </Button>
        </a>
      </Space>
    </div>
  );
}
