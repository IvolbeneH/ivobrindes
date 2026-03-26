import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ivo Brindes - Brindes personalizados",
  description: "Brindes personalizados para empresas, eventos e campanhas.",
  openGraph: {
    title: "Ivo Brindes",
    description:
      "A Ivo Brindes é especializada em brindes personalizados para empresas e campanhas eleitorais em Teresina. Trabalhamos com copos, camisetas, adesivos, canecas e muito mais, sempre com alta qualidade, ótimo custo-benefício e entrega rápida. Solicite seu orçamento e destaque sua marca com brindes exclusivos.",
    images: ["/logobrindes.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
