import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HomeProductCardProps {
  image: StaticImageData;
  title: string;
  priceFrom: string;
  linkTo: string;
}

const HomeCategoryCard = async ({
  image,
  title,
  priceFrom,
  linkTo,
}: HomeProductCardProps) => {
  return (
    <Link
      href={linkTo}
      className={
        "flex flex-row md:w-1/5 bg-gray-50 p-4 mx-5 mt-6 md:mt-0 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-100 hover:shadow-md"
      }
    >
      <div className={"flex flex-col align-middle justify-center w-1/2"}>
        <h3 className={"text-xl font-light"}>{title}</h3>
        <h3 className={"text-md text-gray-600 font-light mt-2"}>{priceFrom}</h3>
      </div>
      <div className={"flex flex-col w-1/2"}>
        <Image src={image} alt={title} />
      </div>
    </Link>
  );
};

export default HomeCategoryCard;
