"use client";
import { Locale } from "@/i18n.config";
import DashboardCard from "@/app/[lang]/_components/admins/DashboardCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/hooks";

export default function OrdersPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [productAction, setProductAction] = useState<string>("");
  const admin = useAppSelector((state) => state.admin);

  const router = useRouter();

  useEffect(() => {
    if (!admin.id) {
      router.replace(`/${lang}/admin/auth`);
    }
  }, [admin, lang, router]);
  return (
    <div>
      <div className={"p-10"}>
        <h1 className={"text-3xl text-center font-medium"}>Admins Dashboard</h1>

        <div className={"flex flex-row justify-evenly mt-10 mx-auto"}>
          <DashboardCard
            title={"New product"}
            description={"Create a new product"}
            buttonText={"Add product"}
            onClick={() => setProductAction("add")}
          />

          <DashboardCard
            title={"Update product"}
            description={"Update an existing product"}
            buttonText={"Update product"}
            onClick={() => setProductAction("update")}
          />
          <DashboardCard
            title={"Delete product"}
            description={"Delete an existing product"}
            buttonText={"Delete product"}
            onClick={() => setProductAction("delete")}
          />
        </div>

        <h3 className={"text-2xl text-center mt-14"}>
          Choose an action to perform on a product from the above cards.
        </h3>
      </div>
    </div>
  );
}
