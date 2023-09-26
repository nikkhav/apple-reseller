"use client";

import Carousel from "@/app/_components/Carousel";
import iphone14_pro from "@/public/images/iphone-14-pro-hero.jpeg";
import macbook_pro from "@/public/images/macbook-pro-hero.jpeg";
import macbook_air from "@/public/images/macbook-air-hero.jpeg";
import mac_icon from "@/public/images/mac-icon.png";
import iphone_icon from "@/public/images/iphone-icon.png";
import watch_icon from "@/public/images/watch-icon.png";
import airpods_icon from "@/public/images/airpods-icon.png";
import HomeProductCard from "@/app/_components/HomeProductCard";

export default function Home() {
  const imagesData = [
    {
      src: macbook_pro,
      alt: "macbook pro",
      backgroundColor: "#000",
      cursorColor: "white",
      title: "New MacBook Pro",
      textColor: "white",
    },
    {
      src: macbook_air,
      alt: "macbook air",
      backgroundColor: "#fcfbfc",
      cursorColor: "black",
      title: "15 inch MacBook Air",
      textColor: "#fbe2e2",
    },
    {
      src: iphone14_pro,
      alt: "iphone 14 pro",
      backgroundColor: "#000",
      cursorColor: "white",
      title: "iPhone 14 Pro",
      textColor: "white",
    },
  ];
  return (
    <main>
      <Carousel images={imagesData} />
      <div className={"flex flex-row justify-center mt-10"}>
        <HomeProductCard
          image={iphone_icon}
          title={"iPhone"}
          priceFrom={45900}
        />
        <HomeProductCard image={mac_icon} title={"Mac"} priceFrom={99990} />
        <HomeProductCard
          image={watch_icon}
          title={"Apple Watch"}
          priceFrom={31990}
        />
        <HomeProductCard
          image={airpods_icon}
          title={"AirPods"}
          priceFrom={9990}
        />
      </div>
    </main>
  );
}
