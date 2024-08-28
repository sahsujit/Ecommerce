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

  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
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
    }}>
    {children}

  </GlobalContext.Provider>
}

