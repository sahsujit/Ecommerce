"use client"
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null)

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


  useEffect(() => {
    try {
      if (Cookies.get("token") !== undefined) {
        setIsAuthUser(true);
        const userData = JSON.parse(localStorage.getItem("user")) || {};
        setUser(userData);
      } else {
        setIsAuthUser(false);
        setUser({}); // unauthenticated user
      }
    } catch (error) {
      console.error("Error in GlobalState useEffect:", error);
      setIsAuthUser(false);
      setUser({});
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
      setAddressFormData
    }}>
    {children}

  </GlobalContext.Provider>
}

