import Carousel from "@/app/[lang]/_components/homePage/Carousel";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import HomeDisplayProducts from "@/app/[lang]/_components/homePage/HomeDisplayProducts";
import {
  carouselImages,
  productsAccessories,
  productsIpad,
  productsIphone,
  productsMac,
  productsWatch,
} from "@/app/homePageData";
import HomeDisplayCategories from "@/app/[lang]/_components/homePage/HomeDisplayCategories";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { button } = await getDictionary(lang);

  return (
    <main>
      <Carousel images={carouselImages} buttonText={button.learnMore} />
      <HomeDisplayCategories />
      <HomeDisplayProducts
        title={"Выбирайте то, что по душе"}
        productsIphone={productsIphone}
        productsIpad={productsIpad}
        productsMac={productsMac}
        productsWatch={productsWatch}
        productsAccessories={productsAccessories}
      />
    </main>
  );
}
