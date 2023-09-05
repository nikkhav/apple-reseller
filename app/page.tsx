import Carousel from "@/app/_components/Carousel";
import logo from "@/public/geekbro-logo.png";
import iphone14_pro from "@/public/iphone-14pro-hero.jpg";
import iphone14 from "@/public/iphone-14-hero.jpeg";

export default function Home() {
  return (
    <main>
      <div className={"my-5"}>
        <Carousel images={[iphone14_pro, iphone14]} carouselHeight={"500px"} />
      </div>
    </main>
  );
}
