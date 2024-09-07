
// import Cookies from "js-cookie";
// import { apiConnector } from "../config/apiConnector";



// export const addNewProduct = async (formData) => {
//   try {
//     const response = await apiConnector("/api/admin/add-product", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${Cookies.get("token")}`,
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };



// export const getAllAdminProducts = async () => {
//   try {
//     const res = await apiConnector(`/api/admin/all-product`, {
//       method: "GET",
//       cache: "no-store",
//     });

//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateAProduct = async (formData) => {
//   try {
//     const res = await apiConnector("/api/admin/update-product", {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${Cookies.get("token")}`,
//       },
//       cache: "no-store",
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };



// export const deleteAProduct = async (id) => {
//   try {
//     const res = await apiConnector(`/api/admin/delete-product?id=${id}`, {
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



// export const productByCategory = async(id)=>{
//   try{
//     const res = await apiConnector(
//       `/api/admin/product-by-category?id=${id}`,
//       {
//         method: "GET",
//         cache: "no-store",
//       }
//     );

//     const data = await res.json();
//     return data
//   }catch(error){
//     console.log(error)
//   }
// }










// export const productById = async (id) => {
//   try {
//     const res = await apiConnector(
//       `/api/admin/product-by-id?id=${id}`,
//       {
//         method: "GET",
//         cache: "no-store",
//       }
//     );

//     const data = await res.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };







import Cookies from "js-cookie";
import { apiConnector } from "../config/apiConnector";

export const addNewProduct = async (formData) => {
  try {
    const response = await apiConnector.post(
      "/api/admin/add-product",
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

export const getAllAdminProducts = async () => {
  try {
    const res = await apiConnector.get("/api/admin/all-product", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
    });

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};

export const updateAProduct = async (formData) => {
  try {
    const res = await apiConnector.put(
      "/api/admin/update-product",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        cache: "no-store",
      }
    );

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};

export const deleteAProduct = async (id) => {
  try {
    const res = await apiConnector.delete(`/api/admin/delete-product?id=${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};

export const productByCategory = async (id) => {
  try {
    const res = await apiConnector.get(`/api/admin/product-by-category?id=${id}`, {
      cache: "no-store",
    });

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};

export const productById = async (id) => {
  try {
    const res = await apiConnector.get(`/api/admin/product-by-id?id=${id}`, {
      cache: "no-store",
    });

    return res.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};
