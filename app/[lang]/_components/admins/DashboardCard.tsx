import React from "react";
import Link from "next/link";

interface DashboardCardProps {
  title: string;
  description: string;
  link?: string;
  onClick?: () => void;
  buttonText: string;
}

const DashboardCard = ({
  title,
  description,
  link,
  onClick,
  buttonText,
}: DashboardCardProps) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center p-8 w-1/4 bg-gray-900 rounded-lg"
      }
    >
      <h3 className={"text-2xl text-white text-center font-medium"}>{title}</h3>
      <p className={"text-lg text-center mt-2 text-white"}>{description}</p>

      {link && (
        <Link
          className={
            "mt-10 bg-white text-black py-2 px-4 rounded-md hover:bg-pink-600 hover:text-white transition-colors duration-200 ease-in-out"
          }
          href={link}
        >
          {buttonText}
        </Link>
      )}

      {onClick && (
        <button
          className={
            "mt-10 bg-white text-black py-2 px-4 rounded-md hover:bg-pink-600 hover:text-white transition-colors duration-200 ease-in-out"
          }
          onClick={onClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default DashboardCard;
