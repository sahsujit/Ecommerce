import connectToDb from "@/database"
import User from "@/models/user";
import Joi from "joi"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role:Joi.string().required()
})


export const dynamic = "force-dynamic";

export  async function POST(req){

    await connectToDb();

    const {name, email, password, role} =await req.json()

    const {error} = schema.validate({name,email,password, role})


    if(error){
        return NextResponse.json({
            success:false,
            message:error.details[0].message
        })
    }

    try{

        const userAlreadyExists = await User.findOne({email})

        if(userAlreadyExists){
            return NextResponse.json({
                success:false,
                message:"User already exists."
            })
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser= await User.create({
                name,
                email,
                password:hashedPassword,
                role
            })
            if(newUser){
                return NextResponse.json({
                    success:true,
                    message:"User created successfully."
                })
            }
        }

       

    }catch(err){
        return NextResponse.json({
            success:false,
            message:err.message
        })
    }
}