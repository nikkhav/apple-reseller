import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang, category },
}: {
  params: { lang: Locale; category: string };
}) {
  const { page } = await getDictionary(lang);

  // @ts-ignore
  const pageTitle = page.products.titles[category] || "GeekBro";

  return (
    <main>
      <h1 className={"text-5xl mt-16 font-semibold text-center"}>
        {pageTitle}
      </h1>
    </main>
  );
}
