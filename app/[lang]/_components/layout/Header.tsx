import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/geekbro-logo.png";
import { Locale } from "@/i18n.config";
import { LanguageSwitcher } from "@/app/[lang]/_components/layout/LanguageSwitcher";

import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export default async function Header({ lang }: { lang: Locale }) {
  const { header } = await getDictionary(lang);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center px-6 md:px-32 py-2 bg-gray-900">
        <div className="flex items-center justify-center space-x-1.5">
          <LanguageSwitcher activeLocale={lang} />
        </div>
        <h3 className="text-sm font-light text-white">{header.account}</h3>
      </div>
      <div className="border-b border-b-gray-300 shadow-gray-400 shadow-sm md:px-20 py-5">
        <div className={"flex justify-center md:justify-between items-center"}>
          <Link href={`/${lang}`}>
            <Image src={logo} alt={"Logo"} width={180} priority={true} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}/products/iphone`}
              className="text-lg font-light"
            >
              iPhone
            </Link>
            <Link
              href={`/${lang}/products/ipad`}
              className="text-lg font-light"
            >
              iPad
            </Link>
            <Link href={`/${lang}/products/mac`} className="text-lg font-light">
              Mac
            </Link>

            <Link
              href={`/${lang}/products/watch`}
              className="text-lg font-light"
            >
              Watch
            </Link>
            <Link
              href={`/${lang}/products/sale`}
              className="text-lg font-light"
            >
              {header.sale}
            </Link>
            <Link href={`/${lang}/products/new`} className="text-lg font-light">
              {header.new}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
