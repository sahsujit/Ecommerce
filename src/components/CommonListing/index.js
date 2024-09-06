"use client";

import { useRouter } from "next/navigation";
import ProductButton from "./ProductButtons";
import ProductTile from "./ProductTile";
import { useEffect } from "react";
import Notification from "../Notification";

export default function CommonListing({ data }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <section className="bg-richblack-900 py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {data && data.length
            ? data.map((item) => (
                <article
                  className="relative bg-richblack-800 hover:scale-105  transition-all duration-200  flex flex-col overflow-hidden rounded border border-richblack-600   cursor-pointer"
                  key={item._id}
                
                >
                  <ProductTile item={item} />
                  <ProductButton item={item} />
                </article>
              ))
            : null}
        </div>
      </div>
      <Notification/>
    </section>
  );
}

