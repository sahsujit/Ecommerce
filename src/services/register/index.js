// import { apiConnector } from "../config/apiConnector";

// export const registerUser = async(formData)=>{
//     try{
//         const response = await apiConnector("/api/register",{
//             method: "POST",
//             headers:{
//                 "content-type": "application/json"
//             },
//             body:JSON.stringify(formData)

//         });

//         const result = await response.json()

//         return result

//     }catch(err){
//         console.log(err)
//     }
// }


import { apiConnector } from "../config/apiConnector";

export const registerUser = async (formData) => {
  try {
    const response = await apiConnector.post(
      "/api/register",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err.response?.data || err.message);
    throw err;
  }
};
