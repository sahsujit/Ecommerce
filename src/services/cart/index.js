// import Cookies from "js-cookie";
// import { apiConnector } from "../config/apiConnector";


// export const addToCart = async (formData) => {
//   try {
//     const res = await apiConnector("/api/cart/add-to-cart", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${Cookies.get("token")}`,
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const getAllCartItems = async (id) => {
//   try {
//     const res = await apiConnector(`/api/cart/all-cart-items?id=${id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${Cookies.get("token")}`,
//       },
//     });

//     const data = await res.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const deleteFromCart = async (id) => {
//   try {
//     const res = await apiConnector(`/api/cart/delete-from-cart?id=${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${Cookies.get("token")}`,
//       },
//     });

//     const data = await res.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };


import Cookies from "js-cookie";
import { apiConnector } from "../config/apiConnector";

export const addToCart = async (formData) => {
  try {
    const res = await apiConnector.post(
      "/api/cart/add-to-cart",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    return res.data; 
  } catch (e) {
    console.error(e.response?.data || e.message);
    throw e;
  }
};

export const getAllCartItems = async (id) => {
  try {
    const res = await apiConnector.get(`/api/cart/all-cart-items?id=${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    return res.data;
  } catch (e) {
    console.error(e.response?.data || e.message);
    throw e;
  }
};

export const deleteFromCart = async (id) => {
  try {
    const res = await apiConnector.delete(`/api/cart/delete-from-cart?id=${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    return res.data;
  } catch (e) {
    console.error(e.response?.data || e.message);
    throw e;
  }
};

