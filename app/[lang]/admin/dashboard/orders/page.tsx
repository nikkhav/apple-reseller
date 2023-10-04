"use client";
import { Locale } from "@/i18n.config";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/hooks";

export default function OrdersPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const router = useRouter();
  const admin = useAppSelector((state) => state.admin);

  useEffect(() => {
    if (!admin.id) {
      router.replace(`/${lang}/admin/auth`);
    }
  }, [admin, lang, router]);
}
