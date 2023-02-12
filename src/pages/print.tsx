import Head from "next/head";

import Image from "next/image";
import logoSMAN12 from "../../public/logo-sman12.png";
import logoSCIO from "../../public/logo-scio12.png";

const KopSurat = () => (
  <header>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "0.3em",
      }}
    >
      <div>
        <Image src={logoSMAN12} alt="Logo SMAN 12 Bekasi" width={80} priority />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          fontSize: "11pt",
        }}
      >
        <h4 style={{ margin: 0, fontSize: "14pt" }}>KELOMPOK ILMIAH REMAJA</h4>
        <h4 style={{ margin: 0, fontSize: "14pt" }}>SMA NEGERI 12 BEKASI</h4>
        <b>Jl. I Gusti Ngurah Rai kel.Kranji Kec. Bekasi Barat 17135</b>
        <b>Telp : 021-8850863, Fax: 021-88964581</b>
        <b>Email: sman12kotabekasi@yahoo.co.id</b>
      </div>
      <div>
        <Image src={logoSCIO} alt="Logo SMAN 12 Bekasi" width={85} priority />
      </div>
    </div>

    <div className="hr">
      <hr />
      <hr />
    </div>
  </header>
);

const BoxTandaTangan = ({
  jabatan,
  nama,
  nomor,
}: {
  jabatan: string;
  nama: string;
  nomor: string;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "200px",
      minWidth: "200px",
    }}
  >
    <div>
      <p>{jabatan}</p>
    </div>

    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <b>
        <u>{nama}</u>
      </b>
      <p style={{ margin: 0 }}>{nomor}</p>
    </div>
  </div>
);

export default function Print() {
  return (
    <>
      <Head>
        <title>Print Surat Akom</title>
      </Head>
      <style global jsx>{`
        @page {
          size: A4;
          margin: 0;
        }

        body {
          width: 210mm;
          height: 297mm;
          display: flex;
          flex-direction: column;
          font-size: 12pt;
          font-family: "Times New Roman", Times, serif;
        }

        .page {
          width: 100%;
          height: 100vh;
          box-sizing: border-box;
          padding: 10mm;
        }

        .page:not(:first-child) {
          margin-top: 30em;
        }

        @media print {
          .page:not(:first-child) {
            margin-top: 0;
          }
        }

        .hr hr {
          margin: 0;
          border: none;
          height: 0.09em;
          background: black;
        }

        .hr hr:nth-child(2) {
          margin-top: 0.2em;
          font-weight: bold;
          height: 0.4em;
        }

        .after-heading {
          margin-top: 0.2em;
        }

        .tanggal-pembuatan-surat {
          display: flex;
          justify-content: flex-end;
        }

        .content p,
        .content i {
          margin: 0.2em;
        }
      `}</style>

      <div className="page">
        <KopSurat />

        <div className="after-heading tanggal-pembuatan-surat">
          <p>XXXXXX, XX XXXXXXXX XXXX</p>
        </div>

        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>Nomor</td>
                <td>&nbsp;&nbsp;:</td>
                <td>XXXX/KIR-SMAN12BKS/X/2023</td>
              </tr>
              <tr>
                <td>Perihal</td>
                <td>&nbsp;&nbsp;:</td>
                <td>Permohonan Peminjaman Ruang Kelas</td>
              </tr>
              <tr>
                <td>Lampiran</td>
                <td>&nbsp;&nbsp;:</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="content">
          <p>Kepada Yth,</p>
          <p>Wakil Kepala Sekolah Bidang Sarana dan</p>
          <p>Prasarana</p>
          <p>XXX XXXX XXX XXXXXX XXXXXXXXX XXXX</p>
          <p>Di tempat</p>
        </div>

        <br />

        <div className="content">
          <i>Assalamualaikum Warahmatullahi Wabarakatuh.</i>
        </div>

        <br />

        <div className="content">
          <p>
            Berkenaan dengan diselenggarakannya Reguler offline untuk
            ekstrakulikuler KIR pada:
          </p>
        </div>

        <br />

        <div className="content">
          <table>
            <tbody>
              <tr>
                <td>Hari/Tanggal</td>
                <td>&nbsp;&nbsp;:</td>
                <td>XXXXX XX XXXXXXXX XXXX</td>
              </tr>
              <tr>
                <td>Waktu</td>
                <td>&nbsp;&nbsp;:</td>
                <td>16.10 - selesai</td>
              </tr>
              <tr>
                <td>Tempat</td>
                <td>&nbsp;&nbsp;:</td>
                <td>SMAN 12 BEKASI</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="content">
          <p>
            Dengan ini kami mengajukan permohonan peminjaman ruang kelas (daftar
            terlampir) untuk menyelanggarakan kegiatan tersebut.
          </p>
        </div>

        <br />

        <div className="content">
          <p>
            Demikian surat ini kami ajukan, kurang lebihnya mohon maaf. Atas
            kerja samanya kami
          </p>
          <p>ucapkan terima kasih.</p>
        </div>

        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Hormat Kami,</h3>
        </div>

        <div className="content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BoxTandaTangan jabatan="Ketua Umum KIR" nama="Beliau 1" nomor="NIS. XXXXXX"/>

            <BoxTandaTangan jabatan="Sekretaris KIR" nama="Beliau 2" nomor="NIS. XXXXXX"/>
          </div>
        </div>
      </div>

      <div className="page">
        <KopSurat />

        <br />

        <div className="content">
          <p style={{ marginBottom: "0.4em" }}>Lampiran:</p>
          <p>Daftar kelas yang akan dipinjam:</p>

          <table style={{ marginLeft: "2.5rem" }}>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Ruang Kelas</td>
              </tr>
              <tr>
                <td></td>
                <td>XII IPA 3</td>
              </tr>
              <tr>
                <td></td>
                <td>XII IPA 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Menyetujui,</h3>
        </div>

        <div className="content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BoxTandaTangan jabatan="Wakasek bidang Sarana dan Prasarana" nama="Nama Wakasek" nomor="NIP.XXXXX" />

            <BoxTandaTangan jabatan="Pembina KIR" nama="Nama Pembina" nomor="NIP.XXXXX" />
          </div>
        </div>
      </div>
    </>
  );
}
