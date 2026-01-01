import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wawa Kopi - Ngopi, Ngobrol, 24 Jam",
  description: "Tempat ngopi yang nyaman buat ngobrol, diskusi, atau sekadar duduk lama — kapan saja. Buka 24 jam di lokasi strategis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
