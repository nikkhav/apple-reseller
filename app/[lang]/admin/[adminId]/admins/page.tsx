"use client";
import { Locale } from "@/i18n.config";
import DashboardCard from "@/app/[lang]/_components/admins/DashboardCard";
import { useState } from "react";
import axios from "axios";
import { useAppSelector } from "@/app/store/hooks";

export default function AdminsPage({
  params: {},
}: {
  params: { lang: Locale; adminId: string };
}) {
  const [adminAction, setAdminAction] = useState<string>("");
  const admin = useAppSelector((state) => state.admin);

  const [createAdminForm, setCreateAdminForm] = useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "admin",
  });

  const [updateAdminForm, setUpdateAdminForm] = useState<{
    oldEmail: string;
    newEmail: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }>({
    oldEmail: "",
    newEmail: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const createAdmin = async () => {
    // TODO: Check that current admin is head admin

    try {
      const response = await axios.post(
        "/api/admins/auth/register",
        createAdminForm,
      );

      if (response.status !== 200) {
        alert(response.data.message);
      }

      alert("Admin created successfully");
    } catch (e) {
      console.log(e);
    }
  };

  const updateAdmin = async () => {
    try {
      const updateData: {
        email?: string;
        password?: string;
        firstName?: string;
        lastName?: string;
        role?: string;
      } = {};

      if (updateAdminForm.newEmail) {
        updateData.email = updateAdminForm.newEmail;
      }
      if (updateAdminForm.password) {
        updateData.password = updateAdminForm.password;
      }
      if (updateAdminForm.firstName) {
        updateData.firstName = updateAdminForm.firstName;
      }
      if (updateAdminForm.lastName) {
        updateData.lastName = updateAdminForm.lastName;
      }
      if (updateAdminForm.role) {
        updateData.role = updateAdminForm.role;
      }
      const response = await axios.patch(
        `/api/admins/${updateAdminForm.oldEmail}`,
        updateData,
      );

      if (response.status !== 200) {
        alert(response.data.message);
      }

      alert("Admin updated successfully");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className={"p-10"}>
        <h1 className={"text-3xl text-center font-medium"}>Admins Dashboard</h1>

        <div className={"flex flex-row justify-evenly mt-10 mx-auto"}>
          <DashboardCard
            title={"Add Admin"}
            description={"Create a new admin"}
            onClick={() => setAdminAction("add")}
            buttonText={"Add admin"}
          />
          <DashboardCard
            title={"Update Credentials or change role of Admin"}
            description={"Update an existing admin"}
            onClick={() => setAdminAction("update")}
            buttonText={"Update admin"}
          />
          <DashboardCard
            title={"Delete Admin"}
            description={"Delete an existing admin"}
            onClick={() => setAdminAction("delete")}
            buttonText={"Delete admin"}
          />
        </div>

        <h3 className={"text-2xl text-center mt-14"}>
          Choose an action to perform on an admin from the above cards.
        </h3>

        <div
          className={"flex flex-row justify-center items-center mt-10 mx-auto"}
        >
          {adminAction === "add" && (
            <div className={"flex flex-col justify-center items-center w-full"}>
              <h3 className={"text-2xl text-center mt-10"}>Add new admin</h3>
              <div className={"flex flex-col w-5/12"}>
                <label className={"text-lg"} htmlFor={"email"}>
                  Email
                </label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setCreateAdminForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  type={"email"}
                  name={"admin-email"}
                  id={"admin-email"}
                  placeholder={"Email"}
                />
                <label className={"text-lg mt-4"} htmlFor={"password"}>
                  Password
                </label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setCreateAdminForm((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                  type={"password"}
                  name={"admin-password"}
                  id={"admin-password"}
                  placeholder={"Password"}
                />

                <label className={"text-lg mt-4"}>First Name</label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setCreateAdminForm((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                  }}
                  name={"firstname"}
                  id={"firstname"}
                  placeholder={"First Name"}
                />

                <label className={"text-lg mt-4"}>Last Name</label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setCreateAdminForm((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                  }}
                  name={"lastname"}
                  id={"lastname"}
                  placeholder={"Last Name"}
                />

                <label className={"text-lg mt-4"}>Role</label>

                <select
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setCreateAdminForm((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }));
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="head admin">Head Admin</option>
                </select>

                <button
                  className={"px-4 py-2 mt-8 bg-gray-900 text-white rounded-md"}
                  onClick={createAdmin}
                >
                  Add admin
                </button>
              </div>
            </div>
          )}

          {adminAction === "update" && (
            <div className={"flex flex-col justify-center items-center w-full"}>
              <h3 className={"text-2xl text-center mt-10"}>Update Admin</h3>

              <p className={"text-lg text-center mt-4"}>
                Fill only the fields you want to update. Leave the rest blank.
              </p>
              <div className={"flex flex-col mt-5 w-5/12"}>
                <label className={"text-lg"} htmlFor={"email"}>
                  Old Email*
                </label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setUpdateAdminForm((prev) => ({
                      ...prev,
                      oldEmail: e.target.value,
                    }));
                  }}
                  type={"email"}
                  name={"admin-email"}
                  id={"admin-email"}
                  placeholder={"Email"}
                />
                <label className={"text-lg mt-4"} htmlFor={"email"}>
                  Email
                </label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setUpdateAdminForm((prev) => ({
                      ...prev,
                      newEmail: e.target.value,
                    }));
                  }}
                  type={"email"}
                  name={"admin-email"}
                  id={"admin-email"}
                  placeholder={"Email"}
                />
                <label className={"text-lg mt-4"} htmlFor={"password"}>
                  Password
                </label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setUpdateAdminForm((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                  type={"password"}
                  name={"admin-password"}
                  id={"admin-password"}
                  placeholder={"Password"}
                />

                <label className={"text-lg mt-4"}>First Name</label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setUpdateAdminForm((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                  }}
                  name={"firstname"}
                  id={"firstname"}
                  placeholder={"First Name"}
                />

                <label className={"text-lg mt-4"}>Last Name</label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setUpdateAdminForm((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                  }}
                  name={"lastname"}
                  id={"lastname"}
                  placeholder={"Last Name"}
                />

                {admin.role === "head admin" && (
                  <>
                    <label className={"text-lg mt-4"}>Role</label>
                    <select
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      onChange={(e) => {
                        setUpdateAdminForm((prev) => ({
                          ...prev,
                          role: e.target.value,
                        }));
                      }}
                    >
                      <option value="admin">Admin</option>
                      <option value="head admin">Head Admin</option>
                    </select>
                  </>
                )}

                <button
                  className={"px-4 py-2 mt-8 bg-gray-900 text-white rounded-md"}
                  onClick={updateAdmin}
                >
                  Update admin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
