import Cookies from "js-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch(`${baseUrl}/api/admin/add-product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/admin/all-product`, {
      method: "GET",
      cache: "no-store",
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateAProduct = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/api/admin/update-product`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
      body: JSON.stringify(formData),
    });

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const deleteAProduct = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/admin/delete-product?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const productByCategory = async (id) => {
  try {
    const res = await fetch(
      `${baseUrl}/api/admin/product-by-category?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const productById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/admin/product-by-id?id=${id}`, {
      method: "GET",
      cache: "no-store",
    });

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};
