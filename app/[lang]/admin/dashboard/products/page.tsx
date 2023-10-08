"use client";
import { Locale } from "@/i18n.config";
import DashboardCard from "@/app/[lang]/_components/admins/DashboardCard";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/hooks";
import Link from "next/link";
import axios from "axios";
import { config } from "@/app/config";
import Image from "next/image";

export default function OrdersPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [productAction, setProductAction] = useState<string>("");
  const [isRUChecked, setIsRUChecked] = useState(false);
  const [isDEChecked, setIsDEChecked] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const [createProductForm, setCreateProductForm] = useState({
    titleEN: "",
    titleRU: "",
    titleDE: "",
    descriptionEN: "",
    descriptionRU: "",
    descriptionDE: "",
    priceEUR: "",
    priceRUB: "",
    category: "",
  });

  const admin = useAppSelector((state) => state.admin);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("IMAGE", image!);
    try {
      const res = await axios.post(`${config.API_URL}upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(res.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  const createProduct = async () => {
    try {
      const res = await axios.post(`${config.API_URL}products`, {
        titles: {
          en: createProductForm.titleEN,
          ru: createProductForm.titleRU,
          de: createProductForm.titleDE,
        },
        prices: {
          eur: createProductForm.priceEUR,
          rub: createProductForm.priceRUB,
        },
        cardImage: imageUrl,
        images: [],
        description: {
          en: createProductForm.descriptionEN,
          ru: createProductForm.descriptionRU,
          de: createProductForm.descriptionDE,
        },
        category: createProductForm.category,
        isNewProduct: true,
        discountRate: 0,
      });

      if (res.status === 200) {
        alert("Product created successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!admin.id) {
      router.replace(`/${lang}/admin/auth`);
    }
  }, [admin, lang, router]);
  return (
    <>
      <div className={"p-10"}>
        <h1 className={"text-3xl text-center font-medium"}>Admins Dashboard</h1>
        <Link
          className={"text-lg text-center underline mt-2 block"}
          href={`/${lang}/admin/dashboard`}
        >
          Go back to all dashboards
        </Link>

        <div className={"flex flex-row justify-evenly mt-10 mx-auto"}>
          <DashboardCard
            title={"New product"}
            description={"Create a new product"}
            buttonText={"Add product"}
            onClick={() => setProductAction("add")}
          />

          <DashboardCard
            title={"Update product"}
            description={"Update an existing product"}
            buttonText={"Update product"}
            onClick={() => setProductAction("update")}
          />
          <DashboardCard
            title={"Delete product"}
            description={"Delete an existing product"}
            buttonText={"Delete product"}
            onClick={() => setProductAction("delete")}
          />
        </div>

        <h3 className={"text-2xl text-center mt-14"}>
          Choose an action to perform on a product from the above cards.
        </h3>

        <div
          className={"flex flex-row justify-center items-center mt-10 mx-auto"}
        >
          {productAction === "add" && (
            <div className={"flex flex-col justify-center items-center w-full"}>
              <h3 className={"text-2xl text-center mt-10"}>Add new product</h3>
              <h5>
                Do you want to use localisations for this product? English is
                enabled by default.
              </h5>

              <div
                className={"flex flex-row justify-center items-center mt-10"}
              >
                <div
                  className={"flex flex-col justify-center items-center mx-4"}
                >
                  <p>RU</p>
                  <input
                    type="checkbox"
                    className={"mt-2 mx-2"}
                    onChange={() => setIsRUChecked(!isRUChecked)}
                  />
                </div>

                <div
                  className={"flex flex-col justify-center items-center mx-4"}
                >
                  <p>DE</p>
                  <input
                    type="checkbox"
                    className={"mt-2 mx-2"}
                    onChange={() => setIsDEChecked(!isDEChecked)}
                  />
                </div>
              </div>

              <div className={"flex flex-col w-5/12"}>
                <label className={"text-lg"}>Title EN</label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  placeholder={"Title EN"}
                  onChange={(e) => {
                    setCreateProductForm({
                      ...createProductForm,
                      titleEN: e.target.value,
                    });
                  }}
                />

                {isRUChecked && (
                  <>
                    <label className={"text-lg mt-4"}>Title RU</label>
                    <input
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      placeholder={"Title RU"}
                      onChange={(e) => {
                        setCreateProductForm({
                          ...createProductForm,
                          titleRU: e.target.value,
                        });
                      }}
                    />
                  </>
                )}

                {isDEChecked && (
                  <>
                    <label className={"text-lg mt-4"}>Title DE</label>
                    <input
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      placeholder={"Title DE"}
                      onChange={(e) => {
                        setCreateProductForm({
                          ...createProductForm,
                          titleDE: e.target.value,
                        });
                      }}
                    />
                  </>
                )}

                <label className={"text-lg mt-4"}>Description EN</label>
                <textarea
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  placeholder={"Description EN"}
                  onChange={(e) => {
                    setCreateProductForm({
                      ...createProductForm,
                      descriptionEN: e.target.value,
                    });
                  }}
                />

                {isRUChecked && (
                  <>
                    <label className={"text-lg mt-4"}>Description RU</label>
                    <textarea
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      placeholder={"Description RU"}
                      onChange={(e) => {
                        setCreateProductForm({
                          ...createProductForm,
                          descriptionRU: e.target.value,
                        });
                      }}
                    />
                  </>
                )}

                {isDEChecked && (
                  <>
                    <label className={"text-lg mt-4"}>Description DE</label>
                    <textarea
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      placeholder={"Description DE"}
                      onChange={(e) => {
                        setCreateProductForm({
                          ...createProductForm,
                          descriptionDE: e.target.value,
                        });
                      }}
                    />
                  </>
                )}

                <label className={"text-lg mt-4"}>Price EUR</label>
                <input
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  placeholder={"Price EUR"}
                  onChange={(e) => {
                    setCreateProductForm({
                      ...createProductForm,
                      priceEUR: e.target.value,
                    });
                  }}
                />

                {isRUChecked && (
                  <>
                    <label className={"text-lg mt-4"}>Price RUB</label>
                    <input
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      placeholder={"Price RUB"}
                      onChange={(e) => {
                        setCreateProductForm({
                          ...createProductForm,
                          priceRUB: e.target.value,
                        });
                      }}
                    />
                  </>
                )}

                <label className={"text-lg mt-4"}>Category</label>

                <select
                  className={
                    "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  }
                  onChange={(e) => {
                    setCreateProductForm({
                      ...createProductForm,
                      category: e.target.value,
                    });
                  }}
                >
                  <option value="iphone">iPhone</option>
                  <option value="mac">Mac</option>
                  <option value="ipad">iPad</option>
                  <option value="audio">Audio</option>
                  <option value="accessories">Accessories</option>
                  <option value="custom">Custom category</option>
                </select>

                {createProductForm.category === "custom" && (
                  <>
                    <label className={"text-lg mt-4"}>Custom category</label>
                    <input
                      className={
                        "border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      }
                      placeholder={"Custom category"}
                      onChange={(e) => {
                        setCreateProductForm({
                          ...createProductForm,
                          category: e.target.value,
                        });
                      }}
                    />
                  </>
                )}

                <div className="flex flex-row justify-center mt-10 w-full">
                  <div className={"flex flex-col w-1/2"}>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={image?.name ? image.name : "Uploaded"}
                        className="rounded-md mx-auto"
                        width={200}
                        height={200}
                      />
                    )}

                    {image ? (
                      <p className={"text-center my-3"}>{image.name}</p>
                    ) : (
                      <p className={"text-center my-3"}>No image selected</p>
                    )}
                    <input
                      type="file"
                      id="IMAGE"
                      name="IMAGE"
                      className="hidden"
                      onChange={handleImageChange}
                    />

                    <label
                      htmlFor="IMAGE"
                      className="cursor-pointer text-center bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                      Select Image
                    </label>

                    <button
                      onClick={handleImageUpload}
                      className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-300 mt-4"
                    >
                      Upload Image
                    </button>
                  </div>
                </div>

                <button
                  className={"px-4 py-2 mt-8 bg-gray-900 text-white rounded-md"}
                  onClick={createProduct}
                >
                  Create product
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
