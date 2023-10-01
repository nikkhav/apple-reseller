import React from "react";
import Image, { StaticImageData } from "next/image";
import { formatCurrency } from "@/app/[lang]/functions";

interface HomeProductCardProps {
  image: StaticImageData;
  title: string;
  price: number;
  translations: any;
}

const HomeProductCard = ({
  image,
  title,
  price,
  translations,
}: HomeProductCardProps) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center w-full md:w-1/4 p-4 text-center"
      }
    >
      <Image height={150} src={image} alt={title} />
      <h3 className={"text-md text-gray-700 font-medium mt-4"}>{title}</h3>
      <h3 className={"text-md text-gray-600 font-light mt-2"}>
        {formatCurrency(price)} руб.
      </h3>

      <button className={"px-4 py-2 mt-4 bg-gray-900 text-white rounded-md"}>
        {translations.toCart}
      </button>
    </div>
  );
};

export default HomeProductCard;
