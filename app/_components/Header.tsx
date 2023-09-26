import React from "react";
import Image from "next/image";
import logo from "../../public/images/geekbro-logo.png";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center px-32 py-2 bg-gray-900">
        <div className="flex items-center justify-center space-x-1.5">
          <h3 className="text-sm font-light text-white">RU</h3>
          <h3 className="text-sm font-light text-white">|</h3>
          <h3 className="text-sm font-light text-white">EN</h3>
        </div>
        <h3 className="text-sm font-light text-white">Личный кабинет</h3>
      </div>
      <div className="border-b border-b-gray-300 shadow-gray-400 shadow-sm px-20 py-5">
        <div className={"flex justify-between items-center"}>
          <Image src={logo} alt={"Logo"} width={180} priority={true} />

          <div className="flex items-center space-x-8">
            <h3 className="text-lg font-light">Mac</h3>
            <h3 className="text-lg font-light">iPhone</h3>
            <h3 className="text-lg font-light">iPad</h3>
            <h3 className="text-lg font-light">Watch</h3>
            <h3 className="text-lg font-light">Sale</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
