import Carousel from "@/app/[lang]/_components/Carousel";
import iphone15_pro_hero from "@/public/images/iphone-15-pro-hero.png";
import apple_watch_hero from "@/public/images/apple-watch-hero.jpg";
import macbook_pro from "@/public/images/macbook-pro-hero.jpeg";
import mac_icon from "@/public/images/mac-icon.png";
import iphone_icon from "@/public/images/iphone-icon.png";
import watch_icon from "@/public/images/watch-icon.png";
import airpods_icon from "@/public/images/airpods-icon.png";
import iphone_14_pro_icon from "@/public/images/iphone-14-pro-black-icon.png";
import HomeCategoryCard from "@/app/[lang]/_components/HomeCategoryCard";
import HomeProductCard from "@/app/[lang]/_components/HomeProductCard";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { button } = await getDictionary(lang);

  const imagesData = [
    {
      src: macbook_pro,
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
  return (
    <main>
      <Carousel images={imagesData} buttonText={button.learnMore} />
      <div className={"flex flex-row justify-center mt-10"}>
        <HomeCategoryCard
          image={iphone_icon}
          title={"iPhone"}
          priceFrom={45900}
        />
        <HomeCategoryCard image={mac_icon} title={"Mac"} priceFrom={99990} />
        <HomeCategoryCard
          image={watch_icon}
          title={"Apple Watch"}
          priceFrom={31990}
        />
        <HomeCategoryCard
          image={airpods_icon}
          title={"AirPods"}
          priceFrom={9990}
        />
      </div>
      <h2
        className={
          "text-3xl text-center md:text-start font-bold mt-10 ml-20 text-pink-600"
        }
      >
        Популярно в этом месяце
      </h2>
      <div
        className={
          "flex flex-col md:flex-row justify-center mt-10 w-10/12 mx-auto"
        }
      >
        <HomeProductCard
          image={iphone_14_pro_icon}
          title={"Apple iPhone 14 Pro, 256Gb, Black"}
          price={110000}
        />
        <HomeProductCard
          image={iphone_14_pro_icon}
          title={"Apple iPhone 14 Pro, 256Gb, Black"}
          price={110000}
        />
        <HomeProductCard
          image={iphone_14_pro_icon}
          title={"Apple iPhone 14 Pro, 256Gb, Black"}
          price={110000}
        />
        <HomeProductCard
          image={iphone_14_pro_icon}
          title={"Apple iPhone 14 Pro, 256Gb, Black"}
          price={110000}
        />
        <HomeProductCard
          image={iphone_14_pro_icon}
          title={"Apple iPhone 14 Pro, 256Gb, Black"}
          price={110000}
        />
      </div>
    </main>
  );
}
