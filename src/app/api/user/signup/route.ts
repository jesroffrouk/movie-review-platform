import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/UserSchema";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SendMail } from "@/helpers/mailer";

connect()

export async function POST(request: NextRequest){
try {
    const reqbody = await request.json()
    const {username,password,email} = reqbody

    const user = await User.findOne({email})
    if(user){
        return NextResponse.json({error: "user already exist"},{status: 400})
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
        username,
        password: hashPassword,
        email,
    })
    const saved = await newUser.save()
    console.log(saved)
    //email verification
    await SendMail({email,emailType: "VERIFY",userId: saved._id})
    return NextResponse.json({
        message: "User Registered Successfully",
        success: true,
        saved
    })
} catch (error: any) {
    return NextResponse.json({error: error.message},{status: 500})
}
}