"use client"
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null)


export const initialCheckoutFormData = {
  shippingAddress: {},
  paymentMethod: "",
  totalPrice: 0,
  isPaid: false,
  paidAt: new Date(),
  isProcessing: true,
};

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState(null)
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);

const [cartItems,setCartItems] = useState([])
  const [showCartModal, setShowCartModal] = useState(false);
  const [pageLevelLoader, setPageLevelLoader] = useState(true);

  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [addressFormData, setAddressFormData] = useState({
    fullName: "",
    city: "",
    country: "",
    postalCode: "",
    address: "",
  });


  const [checkoutFormData, setCheckoutFormData] = useState(
    initialCheckoutFormData
  );

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      const userData = JSON.parse(localStorage.getItem("user")) || {};
      const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setUser(userData);
      setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);

  return <GlobalContext.Provider
    value={{
      showNavModal,
      setShowNavModal,
      isAuthUser,
      setIsAuthUser,
      user,
      setUser,
      componentLevelLoader,
      setComponentLevelLoader,
      currentUpdatedProduct,
      setCurrentUpdatedProduct,
      showCartModal,
      setShowCartModal,
      cartItems,
      setCartItems,
      pageLevelLoader,
      setPageLevelLoader,
      addresses,
      setAddresses,
      addressFormData,
      setAddressFormData,
      checkoutFormData,
      setCheckoutFormData
    }}>
    {children}

  </GlobalContext.Provider>
}

