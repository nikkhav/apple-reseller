"use client";
import { Locale } from "@/i18n.config";
import { useAppSelector } from "@/app/store/hooks";
import DashboardCard from "@/app/[lang]/_components/admins/DashboardCard";

export default function AdminPage({
  params: { lang, adminId },
}: {
  params: { lang: Locale; adminId: string };
}) {
  const admin = useAppSelector((state) => state.admin);
  return (
    <>
      <div className={"w-10/12 mx-auto p-10"}>
        <h1 className={"text-3xl font-medium"}>
          You are logged in as {admin.firstName} {admin.lastName}
        </h1>

        <h3 className={"mt-3 text-lg"}>
          Role: {admin.role.charAt(0).toUpperCase() + admin.role.slice(1)}
        </h3>
      </div>

      <div className={"p-10"}>
        <h1 className={"text-3xl text-center font-medium"}>Dashboard</h1>

        <div className={"flex flex-row justify-evenly mt-10 mx-auto"}>
          <DashboardCard
            title={"Products"}
            description={"View, add, edit, delete products"}
            link={`/${lang}/admin/${adminId}/products`}
            buttonText={"Manage products"}
          />
          <DashboardCard
            title={"Orders"}
            description={"View, add, edit, delete orders"}
            link={`/${lang}/admin/${adminId}/orders`}
            buttonText={"Manage orders"}
          />
          <DashboardCard
            title={"Admins"}
            description={"View, add, edit, delete admins"}
            link={`/${lang}/admin/${adminId}/admins`}
            buttonText={"Manage admins"}
          />
        </div>
      </div>
    </>
  );
}
