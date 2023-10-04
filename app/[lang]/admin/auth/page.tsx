"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";
import { useAppDispatch } from "@/app/store/hooks";
import { setAdmin } from "@/app/store/slices/adminSlice";

export default function AdminAuth({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [loginForm, setLoginForm] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const login = async () => {
    if (loginForm.email.length < 3) {
      setError("Login must be at least 3 characters");
      return;
    }

    if (loginForm.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      const response = await axios.post("/api/admins/auth/login", loginForm);

      if (response.status !== 200) {
        setError(response.data.message);
      }

      const admin = response.data.admin;
      dispatch(
        setAdmin({
          id: admin._id,
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: admin.role,
          token: response.data.token,
        }),
      );

      if (admin) {
        router.push(`/${lang}/admin/dashboard`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className={
        "flex flex-col items-center justify-center w-7/12 mx-auto my-32"
      }
    >
      <h1 className={"text-4xl font-mono"}>
        <span className={"text-pink-600"}>Geekbro</span>-Admin Login
      </h1>

      <p
        className={`mt-4 text-lg text-center text-red-500 transition-opacity duration-300 ease-in-out ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {error}
      </p>

      <div className={"flex flex-col w-7/12 mt-10"}>
        <label className={"text-lg"} htmlFor={"login"}>
          Email
        </label>
        <input
          className={
            "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          }
          onChange={(e) => {
            setLoginForm((prev) => ({ ...prev, email: e.target.value }));
          }}
          type={"email"}
          name={"email"}
          id={"email"}
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
            setLoginForm((prev) => ({ ...prev, password: e.target.value }));
          }}
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"Password"}
        />

        <Link href={"/"} className={"mt-3 text-gray-500"}>
          Reset password
        </Link>
        <button
          className={"px-4 py-2 mt-6 bg-gray-900 text-white rounded-md"}
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
