"use client";

import Carousel from "@/app/_components/Carousel";
import iphone14_pro from "@/public/iphone-14-pro-hero.jpeg";
import macbook_pro from "@/public/macbook-pro-hero.jpeg";
import macbook_air from "@/public/macbook-air-hero.jpeg";

export default function Home() {
  const imagesData = [
    {
      src: macbook_pro,
      alt: "macbook pro",
      backgroundColor: "#000",
      cursorColor: "white",
    },
    {
      src: macbook_air,
      alt: "macbook air",
      backgroundColor: "#fcfbfc",
      cursorColor: "black",
    },
    {
      src: iphone14_pro,
      alt: "iphone 14 pro",
      backgroundColor: "#000",
      cursorColor: "white",
    },
  ];
  return (
    <main>
      <div>
        <Carousel images={imagesData} />
      </div>
    </main>
  );
}
