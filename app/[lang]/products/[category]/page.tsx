import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Product } from "@/app/[lang]/_components/productsPage/Product";
import { productsIphone } from "@/app/homePageData";

async function getProducts(category: string) {
  if (category === "iphone") {
    return productsIphone;
  } else {
    return [];
  }
  // const dummyProducts = [
  //   {
  //     id: 1,
  //     title: "Macbook Pro 14 M2 Max",
  //     image: macbook_pro_icon,
  //     description:
  //       "Новый Macbook Pro 14 M2 Max 2023 года. Получите ещё больше мощности.",
  //     price: 219900,
  //     new: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Iphone 14 Pro 256 Gb",
  //     image: iphone_icon,
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     image: macbook_pro_icon,
  //   },
  //   {
  //     id: 4,
  //     title: "Product 4",
  //     image: macbook_pro_icon,
  //   },
  //   {
  //     id: 5,
  //     title: "Product 4",
  //     image: macbook_pro_icon,
  //   },
  // ];
}

export default async function Products({
  params: { lang, category },
}: {
  params: { lang: Locale; category: string };
}) {
  const { page } = await getDictionary(lang);
  const products = await getProducts(category);

  const pageTitle =
    products.length > 0
      ? // @ts-ignore
        page.products.titles[category]
      : "К сожалению, товаров нет в наличии";

  return (
    <main>
      <h1 className={"text-5xl mt-16 font-semibold text-center"}>
        {pageTitle}
      </h1>

      <div
        className={
          "flex flex-row justify-between items-center mt-10 p-4 border-b-2"
        }
      >
        {products.length > 0 && (
          <>
            <select className={"ml-10"}>
              <option>Новинки</option>
            </select>
            <p className={"mr-10"}>{products.length} Товаров</p>
          </>
        )}
      </div>

      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-5"
        }
      >
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            // description={product.description}
            price={product.price}
            productNew={true}
          />
        ))}
      </div>
    </main>
  );
}
