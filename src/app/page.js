"use client";

import Footer from "@/components/Footer";
import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import ItemLayout from "@/utils/ItemLayout";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <>
      <main className="flex min-h-screen bg-richblack-900 text-white flex-col items-center justify-between p-24">
        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto   lg:gap-8  xl:gap-0 lg:py-16 lg:grid-cols-12">
            <ItemLayout
              // className={
              //   // "  lg:col-span-7 lg:items-start flex-col items-start"
              // }      
                  className="mr-auto  place-self-center lg:col-span-7"
            >
              <h1 className="max-w-2xl mb-4 lg:w-[600px] text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                Best Fashion {" "} <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                  Collection
                </span>
              </h1>
              <p className="max-w-2xl mb-6 lg:w-[600px] text-richblack-300 font-light text-gray-500 lg:mb-8 md:text-lg  lg:text-xl">
                Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
                lacus meleifend menean diverra loremous.
              </p>

              <button
                type="button"
                onClick={() => router.push("/product/listing/all-products")}
                className="mt-1.5 inline-block bg-yellow-50 px-5 py-3 text-xs  uppercase 
              tracking-wide text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md font-bold"
              >
                Explore Shop Collection
              </button>
            </ItemLayout>
            <ItemLayout className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Explore Shop Collection"
              />
            </ItemLayout>
          </div>
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <ItemLayout className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                <div className="max-w-md mx-auto text-center lg:text-left">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">

                      Summer Sale   {" "}
                      <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                        Collection
                      </span>
                    </h2>
                  </div>
                  <button
                    onClick={() => router.push("/product/listing/all-products")}
                    className=" inline-block mt-2 bg-yellow-50 px-5 py-3 text-xs  uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md font-bold"
                  >
                    Shop ALL
                  </button>
                </div>
              </ItemLayout>
              <ItemLayout className="lg:col-span-2 lg:py-8">
                <ul className="grid grid-cols-2 gap-4">
                  {products && products.length
                    ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <ItemLayout
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover opacity-80 w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-richblack-50">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-richblack-5 ">
                              RS.
                              ${productItem.price}{" "}
                              <span className="text-[#f57224]">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p>
                          </div>
                        </ItemLayout>
                      ))
                    : null}
                </ul>
              </ItemLayout>
            </div>
          </div>
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
                SHOP BY <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                  CATEGORY
                </span>
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
              <li>
                <ItemLayout className="relative block group">
                  <img
                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="object-cover opacity-45 w-full aspect-square"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">KIDS</h3>
                    <button
                      onClick={() => router.push("/product/listing/kids")}
                      className="mt-1.5 inline-block bg-yellow-50 px-5 py-3 text-xs  uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md font-bold"
                    >
                      Shop Now
                    </button>
                  </div>
                </ItemLayout>
              </li>
              <li>
                <ItemLayout className="relative block group">
                  <img
                    src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="object-cover opacity-45 w-full aspect-square"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">WOMEN</h3>
                    <button
                      onClick={() => router.push("/product/listing/women")}
                      className="mt-1.5 inline-block bg-yellow-50 px-5 py-3 text-xs  uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md font-bold"                  >
                      Shop Now
                    </button>
                  </div>
                </ItemLayout>
              </li>
              <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <ItemLayout className="relative block group">
                  <img
                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                    className="object-cover opacity-45 w-full aspect-square"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">MEN</h3>
                    <button
                      onClick={() => router.push("/product/listing/men")}
                      className="mt-1.5 inline-block bg-yellow-50 px-5 py-3 text-xs  uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md font-bold"                  >
                      Shop Now
                    </button>
                  </div>
                </ItemLayout>
              </li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>

  );
}
