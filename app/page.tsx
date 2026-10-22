import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="website">
      <Header />

      <div className="dashboard">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <h3>Menu</h3>

          <Link
            href="/"
            className="menu active"
          >
            Home
          </Link>

          <Link
            href="/pengalaman"
            className="menu"
          >
            Pengalaman
          </Link>

        </aside>


        {/* CONTENT */}
        <section className="content">

          <div className="welcome">

            <div className="icon">
              <img src="/images/boysdontsryPP-dashboard-removebg-preview.png" 
              alt="Icon" 
              className="welcome-icon"
              />

            </div>

            <h2>
              Selamat Datang
            </h2>

            <p>
              di website pengalaman pribadi saya
            </p>

            <div className="garis"></div>

            <p className="welcome-text">
              Website ini berisi kumpulan pengalaman
              yang pernah saya alami selama berada
              di sekolah.
            </p>

            <Link
              href="/pengalaman"
              className="button"
            >
              Lihat Pengalaman
            </Link>

          </div>

        </section>

      </div>

      <Footer />
    </main>
  );
}