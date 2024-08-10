export const login = async(formData) =>{
    try{
        const res = await fetch("/api/login",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)

        })

        const result = await res.json()
        return result
    }catch(err){
        console.log(err)
    }
}