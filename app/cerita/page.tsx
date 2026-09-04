import Header from "@/components/header";
import Footer from "@/components/footer";
import { cerita } from "@/data/cerita";

export default function CeritaPage() {
  return (
    <main className="website">

      <Header />

      <div className="dashboard">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <h3>Menu</h3>

          <a href="/">
            Home
          </a>

          <a href="/cerita" className="active">
            Cerita Kami
          </a>

        </aside>


        {/* CONTENT */}
        <section className="content">

          <div className="cerita">

            <h2>Cerita Kami</h2>

            <p className="subjudul">
              Kumpulan cerita dan pengalaman kami
            </p>


            <div className="card-container">

              {cerita.map((item) => (

                <div className="card" key={item.id}>

                  <div className="card-image">
                    {item.gambar}
                  </div>


                  <div className="card-body">

                    <h3>
                      {item.judul}
                    </h3>

                    <small>
                      {item.tanggal}
                    </small>

                    <p>
                      {item.cuplikan}
                    </p>


                    <a
                      href={`/cerita/${item.id}`}
                      className="baca"
                    >
                      Baca
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>


      <Footer />

    </main>
  );
}