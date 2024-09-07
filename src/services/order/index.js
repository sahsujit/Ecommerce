// import Cookies from "js-cookie";
// import { apiConnector } from "../config/apiConnector";

// export const createNewOrder = async (formData) => {
//   try {
//     const res = await apiConnector("/api/order/create-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
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

// export const getAllOrdersForUser = async (id) => {
//   try {
//     const res = await apiConnector(`/api/order/get-all-orders?id=${id}`, {
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

// export const getOrderDetails = async (id) => {
//   try {
//     const res = await apiConnector(`/api/order/order-details?id=${id}`, {
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

// export const getAllOrdersForAllUsers = async () => {
//   try {
//     const res = await apiConnector(`/api/admin/orders/get-all-orders`, {
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

// export const updateStatusOfOrder = async (formData) => {
//   try {
//     const res = await apiConnector(`/api/admin/orders/update-order`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
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


import Cookies from "js-cookie";
import { apiConnector } from "../config/apiConnector";

export const createNewOrder = async (formData) => {
  try {
    const res = await apiConnector.post(
      "/api/order/create-order",
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

export const getAllOrdersForUser = async (id) => {
  try {
    const res = await apiConnector.get(`/api/order/get-all-orders?id=${id}`, {
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

export const getOrderDetails = async (id) => {
  try {
    const res = await apiConnector.get(`/api/order/order-details?id=${id}`, {
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

export const getAllOrdersForAllUsers = async () => {
  try {
    const res = await apiConnector.get(`/api/admin/orders/get-all-orders`, {
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

export const updateStatusOfOrder = async (formData) => {
  try {
    const res = await apiConnector.put(
      `/api/admin/orders/update-order`,
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
