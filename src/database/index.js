

// import mongoose from "mongoose";

// export default function connectToDb(){
//     mongoose.connect(process.env.MONGODB_URL)
//     .then(()=>console.log("Db connected successfully"))
//     .catch((err)=>console.log(`Error in Db connection ${err}`))
// }


import mongoose from "mongoose";

// const configOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

const connectToDB = async () => {
  

  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
