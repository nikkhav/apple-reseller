import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";
import Header from "@/app/[lang]/_components/Header";
import Footer from "@/app/[lang]/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geek Bro",
  description: "Gadget store",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
