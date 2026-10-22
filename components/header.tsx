import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      {/* Lapisan warna ungu transparan */}
      <div className="header-overlay"></div>

      {/* Isi header */}
      <div className="header-content">
        <h1>Website Pengalaman</h1>

        <p>
          Kumpulan Pengalaman dan Kenangan
        </p>
        
      </div>
    </header>
  );
}