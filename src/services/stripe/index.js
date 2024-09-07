// import Cookies from "js-cookie";

// export const callStripeSession = async (formData) => {
//   try {
//     const res = await fetch("/api/stripe", {
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



import Cookies from "js-cookie";
import { apiConnector } from "../config/apiConnector";

export const callStripeSession = async (formData) => {
  try {
    const response = await apiConnector.post(
      "/api/stripe",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    return response.data; 
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};
