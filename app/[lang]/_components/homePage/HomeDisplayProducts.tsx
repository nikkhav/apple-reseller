"use client";
import React, { useState } from "react";
import HomeProductCard from "@/app/[lang]/_components/homePage/HomeProductCard";
import { IHomeProduct } from "@/app/types";
import Link from "next/link";

interface DisplayProductsRowProps {
  title: string;
  productsIphone: IHomeProduct[];
  productsIpad: IHomeProduct[];
  productsWatch: IHomeProduct[];
  productsMac: IHomeProduct[];
  productsAccessories: IHomeProduct[];
  translations: any;
  globalTranslations: any;
}

const HomeDisplayProducts = ({
  title,
  productsIphone,
  productsIpad,
  productsWatch,
  productsMac,
  productsAccessories,
  translations,
  globalTranslations,
}: DisplayProductsRowProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("iPhone");
  const [displayableProducts, setDisplayableProducts] =
    useState<IHomeProduct[]>(productsIphone);

  const buttonClass = (filter: string) => {
    return filter === activeFilter
      ? "bg-pink-600 text-white px-5 py-2 mx-1 rounded-md transition duration-250 ease-in-out"
      : "bg-white text-pink-600 px-5 py-2 mx-1 rounded-md transition duration-250 ease-in-out";
  };

  const changeDisplayableProducts = (filter: string) => {
    switch (filter) {
      case "iPhone":
        setActiveFilter("iPhone");
        setDisplayableProducts(productsIphone);
        break;
      case "iPad":
        setActiveFilter("iPad");
        setDisplayableProducts(productsIpad);
        break;
      case "Watch":
        setActiveFilter("Watch");
        setDisplayableProducts(productsWatch);
        break;
      case "Mac":
        setActiveFilter("Mac");
        setDisplayableProducts(productsMac);
        break;
      case "Accessories":
        setActiveFilter("Accessories");
        setDisplayableProducts(productsAccessories);
        break;
      default:
        setActiveFilter("iPhone");
        setDisplayableProducts(productsIphone);
        break;
    }
  };

  return (
    <>
      <div
        className={
          "flex flex-row justify-between items-center mt-10 mx-auto md:w-11/12"
        }
      >
        <h2
          className={
            "text-3xl text-center md:text-start font-bold  text-pink-600"
          }
        >
          {title}
        </h2>
        <Link className={"text-lg text-gray-600 "} href={"/en/"}>
          {translations.allProducts}
        </Link>
      </div>
      <div className={"overflow-x-auto"}>
        <div className={"flex flex-row mt-5 md:w-11/12 mx-auto "}>
          <button
            className={buttonClass("iPhone")}
            onClick={() => changeDisplayableProducts("iPhone")}
          >
            iPhone
          </button>
          <button
            className={buttonClass("iPad")}
            onClick={() => changeDisplayableProducts("iPad")}
          >
            iPad
          </button>
          <button
            className={buttonClass("Mac")}
            onClick={() => changeDisplayableProducts("Mac")}
          >
            Mac
          </button>
          <button
            className={buttonClass("Watch")}
            onClick={() => changeDisplayableProducts("Watch")}
          >
            Watch
          </button>

          <button
            className={buttonClass("Accessories")}
            onClick={() => changeDisplayableProducts("Accessories")}
          >
            {translations.accessories}
          </button>
        </div>
      </div>
      <div
        className={
          "flex flex-col md:flex-row justify-center mt-10 w-10/12 h-80 mx-auto"
        }
      >
        {displayableProducts.map((product) => (
          <HomeProductCard
            translations={globalTranslations}
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default HomeDisplayProducts;
