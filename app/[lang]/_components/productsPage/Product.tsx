import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { formatCurrency } from "@/app/[lang]/functions";

interface ProductProps {
  title: string;
  image: StaticImageData;
  description?: string;
  price?: number;
  productNew?: boolean;
}

export const Product = ({
  title,
  image,
  description,
  price,
  productNew,
}: ProductProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={"flex flex-col justify-center items-center text-center mt-6"}
      >
        {productNew && (
          <div className={"flex flex-row w-10/12"}>
            <p
              className={
                "text-green-500 text-sm text-left font-semibold tracking-wide"
              }
            >
              Новинка
            </p>
          </div>
        )}
        <Image src={image} alt={title} height={200} />

        <h4>{title}</h4>

        {description && (
          <p className={"mt-1 text-gray-500 text-sm font-light"}>
            {description}
          </p>
        )}

        {price && (
          <p className={"mt-3 text-lg font-semibold"}>
            {formatCurrency(price)} ₽
          </p>
        )}
      </div>
    </>
  );
};
