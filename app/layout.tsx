import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Pengalaman",
  description: "Kumpulan pengalaman pribadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}