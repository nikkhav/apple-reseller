import React from "react";
import HomeCategoryCard from "@/app/[lang]/_components/homePage/HomeCategoryCard";
import iphone_icon from "@/public/images/iphone-category-icon.png";
import mac_icon from "@/public/images/mac-category-icon.png";
import watch_icon from "@/public/images/watch-category-icon.png";
import airpods_icon from "@/public/images/airpods-category-icon.png";

const HomeDisplayCategories = ({
  translations,
  lang,
}: {
  translations: any;
  lang: any;
}) => {
  return (
    <div className={"flex flex-col md:flex-row justify-center mt-10"}>
      <HomeCategoryCard
        linkTo={`${lang}/products/iphone`}
        image={iphone_icon}
        title={"iPhone"}
        priceFrom={translations.categories.iphoneFrom}
      />
      <HomeCategoryCard
        linkTo={`${lang}/products/mac`}
        image={mac_icon}
        title={"Mac"}
        priceFrom={translations.categories.iphoneFrom}
      />
      <HomeCategoryCard
        linkTo={`${lang}/products/watch`}
        image={watch_icon}
        title={"Apple Watch"}
        priceFrom={translations.categories.iphoneFrom}
      />
      <HomeCategoryCard
        linkTo={`${lang}/products/audio`}
        image={airpods_icon}
        title={"Audio"}
        priceFrom={translations.categories.iphoneFrom}
      />
    </div>
  );
};

export default HomeDisplayCategories;
