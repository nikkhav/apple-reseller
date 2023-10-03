"use client";
import { Locale } from "@/i18n.config";
import DashboardCard from "@/app/[lang]/_components/admins/DashboardCard";
import { useState } from "react";

export default function OrdersPage({
  params: {},
}: {
  params: { lang: Locale; adminId: string };
}) {
  const [productAction, setProductAction] = useState<string>("");
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
