import { Button, Space } from "antd-mobile";
import { LinkOutline } from "antd-mobile-icons";

export default function About() {
  return (
    <div className={"full-height-container"} style={{ padding: 10 }}>
      <p>
        Situs ini dibuat dengan kode sumber terbuka. Jika Anda tertarik, silakan
        buat <i>Pull Request</i> pada repository aplikasi ini. Atau jika ingin
        berkomunikasi langsung dengan saya, sapa saya di Twitter.
      </p>
      <Space>
        <a
          href="https://github.com/famasya/jatim-bus-tracker"
          target={"_blank"}
        >
          <Button size="small">
            <LinkOutline /> Github
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
