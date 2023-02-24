import { Button, Popup, Space } from "antd-mobile";
import { LinkOutline, QuestionCircleOutline } from "antd-mobile-icons";
import { useState } from "react";

export default function NavBarRightPanel() {
  const [helpPopup, toggleHelpPopup] = useState(false);

  return (
    <div>
      <Space style={{ "--gap": "16px" }}>
        <Button
          style={{ border: "none" }}
          onClick={() => toggleHelpPopup(true)}
        >
          <QuestionCircleOutline fontSize={24} />
        </Button>
      </Space>

      <Popup
        visible={helpPopup}
        onMaskClick={() => {
          toggleHelpPopup(false);
        }}
        bodyStyle={{
          minHeight: "20vh",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <div style={{ padding: 10 }}>
          <h4>Petunjuk Penggunaan</h4>
          <ol>
            <li>
              Atur lokasi Anda di menu pengaturan (ikon gir di kanan bawah).
              Pilih "Atur lokasi Anda".
            </li>
            <li>
              Secara bawaan, posisi Trans Jatim akan ditampilkan secara
              waktu-nyata (<i>real-time</i>).
            </li>
            <li>
              Untuk Surabaya Bus perlu dinyalakan konfigurasi waktu-nyata pada
              menu pengaturan. Posisi Surabaya Bus akan disinkronisasi tiap 10
              detik.
            </li>
          </ol>

          <a href="https://tally.so/r/nG6pOZ" target={"_blank"}>
            <Button size="small">
              <LinkOutline /> Ada masukan?
            </Button>
          </a>
        </div>
      </Popup>
    </div>
  );
}
