import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="website">

      <Header />

      <div className="dashboard">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <h3>Menu</h3>

          <a href="/" className="active">
            Home
          </a>

          <a href="/cerita">
            Cerita Kami
          </a>

        </aside>


        {/* CONTENT */}
        <section className="content">

          <div className="welcome">

            <div className="icon">
              
            </div>

            <h2>Selamat Datang</h2>

            <p>
              di website pribadiku
            </p>

            <div className="garis"></div>

          </div>

        </section>

      </div>


      <Footer />

    </main>
  );
}