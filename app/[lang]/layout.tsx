import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";
import Header from "@/app/[lang]/_components/layout/Header";
import Footer from "@/app/[lang]/_components/layout/Footer";
import { Providers } from "@/app/store/provider";

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
        <Providers>
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
        </Providers>
      </body>
    </html>
  );
}
