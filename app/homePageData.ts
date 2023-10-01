import { IHomeProduct } from "@/app/types";

import macbook_pro_hero from "@/public/images/macbook-pro-hero.jpeg";
import apple_watch_hero from "@/public/images/apple-watch-hero.jpg";
import iphone_14_pro_icon from "@/public/images/iphone-14-pro-black-icon.png";
import ipad_air_icon from "@/public/images/ipad-air-icon.jpg";
import iphone15_pro_hero from "@/public/images/iphone-15-pro-hero.png";
import macbook_pro_icon from "@/public/images/macbook-pro-icon.jpeg";
import watch_icon from "@/public/images/apple-watch-icon.jpeg";
import airpods_icon from "@/public/images/airpods-icon.webp";

export const carouselImages = [
  {
    src: macbook_pro_hero,
    backgroundColor: "#000",
    cursorColor: "white",
    title: "Новый MacBook Pro",
    textColor: "white",
  },
  {
    src: apple_watch_hero,
    backgroundColor: "#000",
    cursorColor: "white",
    title: "Apple Watch Series 9",
    textColor: "white",
  },
  {
    src: iphone15_pro_hero,
    backgroundColor: "#000",
    cursorColor: "white",
    title: "Титан. iPhone 15 Pro",
    textColor: "white",
  },
];

export const productsIphone: IHomeProduct[] = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro, 256Gb, Black",
    price: 110000,
    image: iphone_14_pro_icon,
  },
  {
    id: 2,
    title: "Apple iPhone 14 Pro, 256Gb, Black",
    price: 110000,
    image: iphone_14_pro_icon,
  },
  {
    id: 3,
    title: "Apple iPhone 14 Pro, 256Gb, Black",
    price: 110000,
    image: iphone_14_pro_icon,
  },
  {
    id: 4,
    title: "Apple iPhone 14 Pro, 256Gb, Black",
    price: 110000,
    image: iphone_14_pro_icon,
  },
];

export const productsIpad: IHomeProduct[] = [
  {
    id: 1,
    title: "Apple iPad Air, 256Gb, Green",
    price: 75000,
    image: ipad_air_icon,
  },
  {
    id: 2,
    title: "Apple iPad Air, 256Gb, Green",
    price: 75000,
    image: ipad_air_icon,
  },
  {
    id: 3,
    title: "Apple iPad Air, 256Gb, Green",
    price: 75000,
    image: ipad_air_icon,
  },
  {
    id: 4,
    title: "Apple iPad Air, 256Gb, Green",
    price: 75000,
    image: ipad_air_icon,
  },
];

export const productsMac: IHomeProduct[] = [
  {
    id: 1,
    title: "Apple MacBook Pro 14, 1Tb, Space Gray",
    price: 249000,
    image: macbook_pro_icon,
  },
  {
    id: 2,
    title: "Apple MacBook Pro 14, 1Tb, Space Gray",
    price: 249000,
    image: macbook_pro_icon,
  },
  {
    id: 3,
    title: "Apple MacBook Pro 14, 1Tb, Space Gray",
    price: 249000,
    image: macbook_pro_icon,
  },
  {
    id: 4,
    title: "Apple MacBook Pro 14, 1Tb, Space Gray",
    price: 249000,
    image: macbook_pro_icon,
  },
];

export const productsWatch: IHomeProduct[] = [
  {
    id: 1,
    title: "Apple Watch Series 9, Polar Star",
    price: 39900,
    image: watch_icon,
  },
  {
    id: 2,
    title: "Apple Watch Series 9, Polar Star",
    price: 39900,
    image: watch_icon,
  },
  {
    id: 3,
    title: "Apple Watch Series 9, Polar Star",
    price: 39900,
    image: watch_icon,
  },
  {
    id: 4,
    title: "Apple Watch Series 9, Polar Star",
    price: 39900,
    image: watch_icon,
  },
];

export const productsAccessories: IHomeProduct[] = [
  {
    id: 1,
    title: "Apple AirPods Pro 2nd gen.",
    price: 24990,
    image: airpods_icon,
  },
  {
    id: 2,
    title: "Apple AirPods Pro 2nd gen.",
    price: 24990,
    image: airpods_icon,
  },
  {
    id: 3,
    title: "Apple AirPods Pro 2nd gen.",
    price: 24990,
    image: airpods_icon,
  },
  {
    id: 4,
    title: "Apple AirPods Pro 2nd gen.",
    price: 24990,
    image: airpods_icon,
  },
];
