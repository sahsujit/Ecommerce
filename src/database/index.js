

import mongoose from "mongoose";

export default function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("Db connected successfully"))
    .catch((err)=>console.log(`Error in Db connection ${err}`))
}