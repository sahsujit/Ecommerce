export const registerUser = async(formData)=>{
    try{
        const response = await fetch("/api/register",{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(formData)

        });

        const result = await response.json()

        return result

    }catch(err){
        console.log(err)
    }
}