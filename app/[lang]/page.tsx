import Carousel from "@/app/[lang]/_components/homePage/Carousel";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import HomeDisplayProducts from "@/app/[lang]/_components/homePage/HomeDisplayProducts";
import {
  productsAccessories,
  productsIpad,
  productsIphone,
  productsMac,
  productsWatch,
} from "@/app/homePageData";
import HomeDisplayCategories from "@/app/[lang]/_components/homePage/HomeDisplayCategories";
import macbook_pro_hero from "@/public/images/macbook-pro-hero.jpeg";
import apple_watch_hero from "@/public/images/apple-watch-hero.jpg";
import iphone15_pro_hero from "@/public/images/iphone-15-pro-hero.png";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { button } = await getDictionary(lang);
  const { page } = await getDictionary(lang);
  const { global } = await getDictionary(lang);

  const carouselImages = [
    {
      src: iphone15_pro_hero,
      backgroundColor: "#000",
      cursorColor: "white",
      title: page.home.hero.titleIphone,
      textColor: "white",
    },
    {
      src: macbook_pro_hero,
      backgroundColor: "#000",
      cursorColor: "white",
      title: page.home.hero.titleMac,
      textColor: "white",
    },
    {
      src: apple_watch_hero,
      backgroundColor: "#000",
      cursorColor: "white",
      title: page.home.hero.titleWatch,
      textColor: "white",
    },
  ];

  return (
    <main>
      <Carousel images={carouselImages} buttonText={button.learnMore} />
      <HomeDisplayCategories lang={lang} translations={global} />
      <HomeDisplayProducts
        translations={page.home}
        globalTranslations={global}
        title={page.home.productsTitle}
        productsIphone={productsIphone}
        productsIpad={productsIpad}
        productsMac={productsMac}
        productsWatch={productsWatch}
        productsAccessories={productsAccessories}
      />
    </main>
  );
}
