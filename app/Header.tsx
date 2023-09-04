import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center px-32 py-2 bg-gray-900">
        <div className="flex items-center space-x-8">
          <h3 className="text-md font-light text-white">Москва и область</h3>
        </div>
      </div>
      <div className="border-b border-b-gray-300 shadow-gray-400 shadow-sm px-20 py-5">
        <div className={"flex justify-between items-center"}>
          <h1 className="text-2xl font-bold">Geek Bro</h1>

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
