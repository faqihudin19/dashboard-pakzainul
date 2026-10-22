import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { pengalaman } from "@/data/pengalaman";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailPengalaman({
  params,
}: Props) {

  const { id } = await params;

  const data = pengalaman.find(
    (item) => item.id === Number(id)
  );


  // Jika data tidak ditemukan
  if (!data) {
    return (
      <main className="website">

        <Header />

        <section className="error-page">

          <h2>
            Pengalaman Tidak Ditemukan
          </h2>

          <p>
            Data pengalaman yang kamu cari
            tidak tersedia.
          </p>

          <Link
            href="/pengalaman"
            className="button"
          >
            Kembali ke Pengalaman
          </Link>

        </section>

        <Footer />

      </main>
    );
  }


  return (
    <main className="website">

      <Header />

      <section className="detail-page">

        <Link
          href="/pengalaman"
          className="kembali"
        >
          ← Kembali ke Pengalaman
        </Link>


        <article className="detail-card">

          <img
            src={data.gambar}
            alt={data.judul}
            className="detail-image"
          />


          <div className="detail-content">

            <h2>
              {data.judul}
            </h2>

            <p className="tanggal">
             {data.tanggal}
            </p>

            <div className="detail-line"></div>

            <p>
              {data.isi}
            </p>

          </div>

        </article>

      </section>

      <Footer />

    </main>
  );
}