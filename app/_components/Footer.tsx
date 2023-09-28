import React from "react";
import Image from "next/image";
import logo from "@/public/images/geekbro-logo-light.png";

const Footer = () => {
  return (
    <div className={"bg-gray-900 mt-5 px-10 py-5 text-white"}>
      <div className="px-20 py-5">
        <div
          className={"flex flex-col md:flex-row justify-between items-center"}
        >
          <Image src={logo} alt={"Logo"} width={180} priority={true} />

          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <h3 className="text-lg font-light">Контакты</h3>
            <h3 className="text-lg font-light">О компании</h3>
            <h3 className="text-lg font-light">Доставка</h3>
            <h3 className="text-lg font-light">Оплата</h3>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-col justify-center items-center mt-5 text-gray-300 font-light"
        }
      >
        <p className={"text-center"}>
          This is a demo project made by Nikita Khavkin
        </p>
        <p className={"text-center"}>Github, Telegram: @nikkhav</p>
      </div>
    </div>
  );
};

export default Footer;
