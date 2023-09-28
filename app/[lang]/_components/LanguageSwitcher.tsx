"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";

export function LanguageSwitcher({ activeLocale }: { activeLocale: string }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex items-center">
      {i18n.locales.map((locale, index) => {
        const active = locale === activeLocale;
        return (
          <li
            key={locale}
            className={`text-white ${
              index < i18n.locales.length - 1 ? "mr-2" : ""
            }`}
          >
            <Link
              href={redirectedPathName(locale)}
              className={`${active ? "text-pink-600" : "text-white"}`}
            >
              {locale.toUpperCase()}
            </Link>
            {index < i18n.locales.length - 1 && (
              <span className="text-white"> | </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
