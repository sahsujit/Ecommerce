"use client";

import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { fetchAllAddresses } from "@/services/address";
import { createNewOrder } from "@/services/order";
import { callStripeSession } from "@/services/stripe";
import ItemLayout from "@/utils/ItemLayout";
import { loadStripe } from "@stripe/stripe-js";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Checkout() {
  const {
    cartItems,
    user,
    addresses,
    setAddresses,
    checkoutFormData,
    setCheckoutFormData,
  } = useContext(GlobalContext);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const router = useRouter();
  const params = useSearchParams();

  const publishableKey =
    "pk_test_51PNcvVP7v1jDSs7diwOdtxC4N1gBXuLwHyVWWsHLMNmb6e57z9KpsDv59Y6dtI1hr7TzTHzZSmILzD464UdtNDFU00Ns1R6NBf";
  const stripePromise = loadStripe(publishableKey);



  useEffect(() => {

    async function createFinalOrder() {
      const isStripe = await JSON.parse(localStorage.getItem('stripe'));

      if (isStripe && params.get("status")
        === "success" && cartItems && cartItems.length > 0) {
          setIsOrderProcessing(true);
          const getCheckoutFormData = JSON.parse(
            localStorage.getItem("checkoutFormData")
          );
  
          const createFinalCheckoutFormData = {
            user: user?._id,
            shippingAddress: getCheckoutFormData.shippingAddress,
            orderItems: cartItems.map((item) => ({
              qty: 1,
              product: item.productID,
            })),
            paymentMethod: "Stripe",
            totalPrice: cartItems.reduce(
              (total, item) => item.productID.price + total,
              0
            ),
            isPaid: true,
            isProcessing: true,
            paidAt: new Date(),
          };

          const res = await createNewOrder(createFinalCheckoutFormData);

          if (res.success) {
            setIsOrderProcessing(false);
            setOrderSuccess(true);
            toast.success(res.message);
          } else {
            setIsOrderProcessing(false);
            setOrderSuccess(false);
            toast.error(res.message,);
          }
  

      }
    }

    createFinalOrder()


  }, [params.get("status", cartItems)])


  async function handleCheckout() {
    const stripe = await stripePromise;


    const createLineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          images: [item.productID.imageUrl],
          name: item.productID.name,
        },
        unit_amount: item.productID.price * 100,
      },
      quantity: 1,
    }));

    const res = await callStripeSession(createLineItems);

    setIsOrderProcessing(true);
    localStorage.setItem("stripe", true);
    localStorage.setItem("checkoutFormData", JSON.stringify(checkoutFormData));

    const { error } = await stripe.redirectToCheckout({
      sessionId: res.id,
    });
    console.log(error)


  }

  async function getAllAddresses() {
    const res = await fetchAllAddresses(user?._id);

    if (res.success) {
      setAddresses(res.data);
    }
  }

  useEffect(() => {
    if (user !== null) getAllAddresses();
  }, [user]);



  function handleSelectedAddress(getAddress) {
    if (getAddress._id === selectedAddress) {
      setSelectedAddress(null);
      setCheckoutFormData({
        ...checkoutFormData,
        shippingAddress: {},
      });

      return;
    }

    setSelectedAddress(getAddress._id);
    setCheckoutFormData({
      ...checkoutFormData,
      shippingAddress: {
        ...checkoutFormData.shippingAddress,
        fullName: getAddress.fullName,
        city: getAddress.city,
        country: getAddress.country,
        postalCode: getAddress.postalCode,
        address: getAddress.address,
      },
    });
  }


  useEffect(() => {
    if (orderSuccess) {
      setTimeout(() => {
        
        router.push("/orders");
      }, [3000]);
    }
  }, [orderSuccess]);

  if (orderSuccess) {
    return (
      <section className="h-screen bg-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="bg-richblack-800 text-richblack-25 shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
                <h1 className="font-bold text-lg">
                  Your payment is successfull and you will be redirected to
                  orders page in 3 seconds !
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  if (isOrderProcessing) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PulseLoader
          color={"#fff"}
          loading={isOrderProcessing}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }



  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="font-medium text-xl">Cart Summary</p>
          <div className="mt-8 space-y-3 rounded-lg border border-richblack-600 px-2 py-4 sm:px-5">
            {cartItems && cartItems.length ? (
              cartItems.map((item) => (
                <ItemLayout
                  className="flex flex-col bg-richblack-800 rounded-lg sm:flex-row"
                  key={item._id}
                >
                  <img
                    src={item && item.productID && item.productID.imageUrl}
                    alt="Cart Item"
                    className="m-2 h-24 w-28 rounded-md border border-richblack-600 object-cover object-center"
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-bold">
                      {item && item.productID && item.productID.name}
                    </span>
                    <span className="font-semibold">
                      {item && item.productID && item.productID.price}
                    </span>
                  </div>
                </ItemLayout>
              ))
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Shipping address details</p>
          <p className="text-gray-400 font-bold">
            Complete your order by selecting address below
          </p>
          <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-6">
            {addresses && addresses.length ? (
              addresses.map((item) => (
                <ItemLayout
                  onClick={() => handleSelectedAddress(item)}
                  key={item._id}
                  className={`border bg-richblack-800 rounded-md border-richblack-600 p-6 ${item._id === selectedAddress ? "border-richblack-5" : ""
                    }`}
                >
                  <p>Name :<span className="text-richblack-100"> {item.fullName}</span></p>
                  <p>Address : <span className="text-richblack-100"> {item.address}</span></p>
                  <p>City : <span className="text-richblack-100"> {item.city}</span></p>
                  <p>Country : <span className="text-richblack-100"> {item.country}</span></p>
                  <p>PostalCode : <span className="text-richblack-100"> {item.postalCode}</span></p>
                  <button className="mt-5 mr-5 inline-block bg-yellow-50 text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] px-5 py-3 text-xs font-bold  hover:shadow-none hover:scale-95 transition-all duration-200 rounded-md uppercase tracking-wide">
                    {item._id === selectedAddress
                      ? "Selected Address"
                      : "Select Address"}
                  </button>
                </ItemLayout>
              ))
            ) : (
              <p>No addresses added</p>
            )}
          </div>
          <button
            onClick={() => router.push("/account")}
            className="mt-5 mr-5 inline-block bg-yellow-50 text-black px-5 py-3 text-xs font-bold uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] rounded-md hover:shadow-none hover:scale-95 transition-all duration-200"
          >
            Add new address
          </button>
          <div className="mt-6 border-t border-richblack-600 border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-richblack-25">Subtotal</p>
              <p className="text-lg font-bold text-[#f57224]">
                $
                {cartItems && cartItems.length
                  ? cartItems.reduce(
                    (total, item) => item.productID.price + total,
                    0
                  )
                  : "0"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-richblack-25">Shipping</p>
              <p className="text-lg font-bold text-richblack-50">Free</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-richblack-25">Total</p>
              <p className="text-lg font-bold text-[#f57224]">
                $
                {cartItems && cartItems.length
                  ? cartItems.reduce(
                    (total, item) => item.productID.price + total,
                    0
                  )
                  : "0"}
              </p>
            </div>
            <div className="pb-10">
              <button
                disabled={
                  (cartItems && cartItems.length === 0) ||
                  Object.keys(checkoutFormData.shippingAddress).length === 0
                }
                onClick={handleCheckout}
                className="disabled:opacity-50 mt-5 mr-5 w-full  inline-block bg-yellow-50 text-black px-5 rounded-md py-3 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]  hover:shadow-none hover:scale-95 transition-all duration-200 uppercase tracking-wide"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
