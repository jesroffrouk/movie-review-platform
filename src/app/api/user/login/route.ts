import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/UserSchema";
import { NextRequest , NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

connect()

export async function POST(request: NextRequest){
    try {
        const redbody = await request.json()
        const {username,password} = redbody

        const user = await User.findOne({username})
        if(!user){
            return NextResponse.json(
                {
                    error: 
                    {
                        code: 'USER_NOT_EXIST',
                        message: "user doesnot exist"
                    }
                }
                ,{status: 401})
        }
        //password verification
        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return NextResponse.json({
                    error: 
                    {
                        code: 'INCORRECT_USER_PASSWORD',
                        message: "please provide correct username or password"
                    }
                }
                ,{status: 401})
        }
        //authentication
        const secretKey = process.env.TOKEN_SECRET!
        const token = jwt.sign({id: user._id,username: user.username},secretKey,{expiresIn: "1h"})
        const response = NextResponse.json({message: "User Logged in Successfully"}, {status: 200})
        response.cookies.set('token',token,{
            httpOnly: true,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        })

        return response

    } catch (error: any) {
        console.log("error while login" + error.message)
        return NextResponse.json(
            {
                    error: 
                    {
                        code: 'SERVER_ERROR',
                        message: error.message
                    }
            },{status: 501})
        
    }
}