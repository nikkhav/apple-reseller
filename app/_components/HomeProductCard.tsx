import Image, { StaticImageData } from "next/image";

interface HomeProductCardProps {
  image: StaticImageData;
  title: string;
  priceFrom: number;
}

const HomeProductCard = ({ image, title, priceFrom }: HomeProductCardProps) => {
  const formatCurrency = (amount: number) => {
    const amountString = amount.toString();
    const parts = amountString.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  };
  return (
    <div className={"flex flex-row w-1/5 bg-gray-50 p-4 mx-5 rounded-sm"}>
      <div className={"flex flex-col align-middle justify-center w-1/2"}>
        <h3 className={"text-xl font-light"}>{title}</h3>
        <h3 className={"text-md text-gray-600 font-light mt-2"}>
          от {formatCurrency(priceFrom)} руб.
        </h3>
      </div>
      <div className={"flex flex-col w-1/2"}>
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export default HomeProductCard;
