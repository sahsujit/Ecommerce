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
//     const res = await fetch(`${process.env.BASE_URL}/api/admin/all-product`, {
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
//       `${process.env.BASE_URL}/api/admin/product-by-category?id=${id}`,
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
//       `${process.env.BASE_URL}/api/admin/product-by-id?id=${id}`,
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

// Base URL should be set in environment variables for deployment
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'; // Fallback to localhost if not set

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`, // Ensure token is available
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

export const getAllAdminProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/all-product`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all products:', error);
  }
};

export const updateAProduct = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/update-product`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`, // Ensure token is available
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

export const deleteAProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/delete-product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`, // Ensure token is available
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

export const productByCategory = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/product-by-category?id=${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
  }
};

export const productById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/product-by-id?id=${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
  }
};
