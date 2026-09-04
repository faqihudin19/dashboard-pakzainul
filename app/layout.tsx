import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "My Website",
  description: "Cerita, Kenangan, dan Inspirasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <div className="opacity-80 w-screen h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
