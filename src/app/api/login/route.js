import connectToDb from "@/database";
import User from "@/models/user";
import Joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

export async function POST(req) {
    await connectToDb()
    try {


        const { email, password } = await req.json();

        const { error } = schema.validate({ email, password })

        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }

        const existsUser = await User.findOne({ email })

        if (!existsUser) {
            return NextResponse.json({
                success: false,
                message: "User doesn't exists."
            })
        }

        const newPassword = bcrypt.compare(password, existsUser.password);

        if (!newPassword) {
            return NextResponse.json({
                success: false,
                message: "Incorrect Password."
            })
        }

        const token = jwt.sign({
            id: existsUser._id,
            email: existsUser.email,
            role: existsUser.role

        }, process.env.JWT_SECRET, { expiresIn: "1d" })

        const finalData = {
            token,
            user:{
                _id: existsUser._id,
                email: existsUser.email,
                role: existsUser.role,
                name: existsUser.name,

            }
            // existsUser
        } 


        return NextResponse.json({
            success: true,
            message: "Login successfully.",
            finalData
        })

    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }
}