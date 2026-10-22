import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { pengalaman } from "@/data/pengalaman";

export default function PengalamanPage() {
  return (
    <main className="website">

      <Header />

      <div className="dashboard">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <h3>Menu</h3>

          <Link
            href="/"
            className="menu"
          >
            Home
          </Link>

          <Link
            href="/pengalaman"
            className="menu active"
          >
            Pengalaman
          </Link>

        </aside>


        {/* CONTENT */}
        <section className="content">

          <div className="pengalaman-page">

            <div className="page-title">

              <h2>
                Pengalaman
              </h2>

              <p>
                Kumpulan pengalaman yang pernah saya alami
              </p>

            </div>


            {/* LIST ITEM */}
            <div className="card-container">

              {pengalaman.map((item) => (

                <div
                  className="card"
                  key={item.id}
                >

                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="card-image"
                  />

                  <div className="card-body">

                    <h3>
                      {item.judul}
                    </h3>

                    <p className="tanggal">
                      {item.tanggal}
                    </p>

                    <p className="cuplikan">
                      {item.cuplikan}
                    </p>

                    <Link
                      href={`/pengalaman/${item.id}`}
                      className="button baca"
                    >
                      Baca
                    </Link>

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