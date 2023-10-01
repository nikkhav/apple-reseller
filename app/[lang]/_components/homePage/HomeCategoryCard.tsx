import Image, { StaticImageData } from "next/image";
import { formatCurrency } from "@/app/[lang]/functions";
import Link from "next/link";

interface HomeProductCardProps {
  image: StaticImageData;
  title: string;
  priceFrom: number;
  translations: any;
  linkTo: string;
}

const HomeCategoryCard = async ({
  image,
  title,
  priceFrom,
  translations,
  linkTo,
}: HomeProductCardProps) => {
  return (
    <Link
      href={linkTo}
      className={"flex flex-row w-1/5 bg-gray-50 p-4 mx-5 rounded-sm"}
    >
      <div className={"flex flex-col align-middle justify-center w-1/2"}>
        <h3 className={"text-xl font-light"}>{title}</h3>
        <h3 className={"text-md text-gray-600 font-light mt-2"}>
          {translations.from} {formatCurrency(priceFrom)} руб.
        </h3>
      </div>
      <div className={"flex flex-col w-1/2"}>
        <Image src={image} alt={title} />
      </div>
    </Link>
  );
};

export default HomeCategoryCard;
