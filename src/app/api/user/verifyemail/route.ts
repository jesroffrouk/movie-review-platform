import User from "@/models/UserSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
   try {
     const reqbody = await request.json()
     const {token} = reqbody
 
     const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}})
     if(!user){
         return NextResponse.json({error: "invalid Token"}, {status: 400})
     }
     user.isVerified = true
     user.verifyToken = undefined
     user.verifyTokenExpiry = undefined

     await user.save()
     return NextResponse.json({message: "email verified successfully", success: true},{status: 200})

   } catch (error:any) {
    return NextResponse.json({error: error.message},{status: 400})
   }
}