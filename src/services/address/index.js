// import Cookies from "js-cookie";
// import { apiConnector } from "../config/apiConnector";

// export const addNewAddress = async (formData) => {
//   try {
//     const res = await apiConnector("/api/address/add-new-address", {
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

// export const fetchAllAddresses = async (id) => {
//   try {
//     const res = await apiConnector(`/api/address/get-all-address?id=${id}`, {
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

// export const updateAddress = async (formData) => {
//   try {
//     const res = await apiConnector("/api/address/update-address", {
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

// export const deleteAddress = async (id) => {
//   try {
//     const res = await apiConnector(`/api/address/delete-address?id=${id}`, {
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

export const addNewAddress = async (formData) => {
  try {
    const res = await apiConnector.post(
      "/api/address/add-new-address",
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

export const fetchAllAddresses = async (id) => {
  try {
    const res = await apiConnector.get(`/api/address/get-all-address?id=${id}`, {
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

export const updateAddress = async (formData) => {
  try {
    const res = await apiConnector.put(
      "/api/address/update-address",
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

export const deleteAddress = async (id) => {
  try {
    const res = await apiConnector.delete(
      `/api/address/delete-address?id=${id}`,
      {
        headers: {
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
