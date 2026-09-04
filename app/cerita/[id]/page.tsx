import Header from "@/components/header";
import Footer from "@/components/footer";
import { cerita } from "@/data/cerita";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailCerita({ params }: Props) {

  const { id } = await params;

  const data = cerita.find(
    (item) => item.id === Number(id)
  );


  if (!data) {
    return (
      <main className="website">

        <Header />

        <section className="detail-error">
          <h2>Cerita tidak ditemukan</h2>

          <a href="/cerita">
            Kembali ke Cerita Kami
          </a>
        </section>

        <Footer />

      </main>
    );
  }


  return (
    <main className="website">

      <Header />

      <section className="detail">

        <a href="/cerita" className="kembali">
          ← Kembali
        </a>


        <div className="detail-card">

          <div className="detail-image">
            {data.gambar}
          </div>

          <div className="detail-content">

            <h2>
              {data.judul}
            </h2>

            <small>
              {data.tanggal}
            </small>

            <p>
              {data.isi}
            </p>

          </div>

        </div>

      </section>


      <Footer />

    </main>
  );
}