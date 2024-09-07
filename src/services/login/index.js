// import { apiConnector } from "../config/apiConnector"

// export const login = async(formData) =>{
//     try{
//         const res = await apiConnector("/api/login",{
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(formData)

//         })

//         const result = await res.json()
//         return result
//     }catch(err){
//         console.log(err)
//     }
// }

import { apiConnector } from "../config/apiConnector";

export const login = async (formData) => {
  try {
    const res = await apiConnector.post("/api/login", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    return res.data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err;
  }
};
