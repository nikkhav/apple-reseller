import { StaticImageData } from "next/image";

export interface IHomeProduct {
  id: number;
  title: string;
  image: StaticImageData;
  price: number;
}
