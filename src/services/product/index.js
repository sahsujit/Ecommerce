// //add a new product service

// import Cookies from "js-cookie";

// export const addNewProduct = async (formData) => {
//   try {
//     const response = await fetch("/api/admin/add-product", {
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
//     const res = await fetch("http://localhost:3000/api/admin/all-product", {
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
//     const res = await fetch("/api/admin/update-product", {
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
//     const res = await fetch(`/api/admin/delete-product?id=${id}`, {
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

// export const productByCategory = async (id) => {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/admin/product-by-category?id=${id}`,
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

// export const productById = async (id) => {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/admin/product-by-id?id=${id}`,
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



// Example: Use relative URLs

import Cookies from "js-cookie";

const baseURL = "http://localhost:3000/api/admin"; // Define baseURL

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch(`${baseURL}/add-product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdminProducts = async () => {
  try {
    const url = `${baseURL}/all-product`;
    console.log(`Fetching URL: ${url}`);
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAProduct = async (formData) => {
  try {
    const res = await fetch(`${baseURL}/update-product`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAProduct = async (id) => {
  try {
    const res = await fetch(`${baseURL}/delete-product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const productByCategory = async (id) => {
  try {
    const res = await fetch(`${baseURL}/product-by-category?id=${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const productById = async (id) => {
  try {
    const res = await fetch(`${baseURL}/product-by-id?id=${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
