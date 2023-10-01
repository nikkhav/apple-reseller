import React from "react";
import HomeCategoryCard from "@/app/[lang]/_components/homePage/HomeCategoryCard";
import iphone_icon from "@/public/images/iphone-category-icon.png";
import mac_icon from "@/public/images/mac-category-icon.png";
import watch_icon from "@/public/images/watch-category-icon.png";
import airpods_icon from "@/public/images/airpods-category-icon.png";

const HomeDisplayCategories = () => {
  return (
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
  );
};

export default HomeDisplayCategories;
