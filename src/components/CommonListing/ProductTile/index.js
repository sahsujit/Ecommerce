"use client";

import { useRouter } from "next/navigation";

export default function ProductTile({ item }) {
  const router = useRouter();
  
  return (
    <div  onClick={()=> router.push(`/product/${item._id}`)}>
      <div className="overflow-hideen aspect-w-1 aspect-h-1 h-52">
        <img
          src={item.imageUrl}
          alt="Product image"
          className="h-full w-full object-cover "
        />
      </div>
      {item.onSale === "yes" ? (
        <div className="absolute top-0 m-2 rounded-full bg-yellow-50">
          <p className="rounded-full  p-1 text-[8px] font-bold uppercase tracking-wide text-black sm:py-1 sm:px-3">
            Sale
          </p>
        </div>
      ) : null}
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p
            className={`mr-3 text-sm font-semibold text-[#f57224] ${
              item.onSale === "yes" ? "line-through" : ""
            }`}
          >{`$ ${item.price}`}</p>
          {item.onSale === "yes" ? (
            <p className="mr-3 text-sm font-semibold ">{`$ ${(
              item.price -
              item.price * (item.priceDrop / 100)
            ).toFixed(2)}`}</p>
          ) : null}
          {item.onSale === "yes" ? (
            <p className="mr-3 text-sm text-[#f57224] font-semibold">{`-(${item.priceDrop}%)off`}</p>
          ) : null}
        </div>
        <h3 className="md-2 text-richblack-50 text-sm">{item.name}</h3>
      </div>
    </div>
  );
}
