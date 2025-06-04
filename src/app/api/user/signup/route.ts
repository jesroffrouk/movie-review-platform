import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/UserSchema";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import { SendMail } from "@/helpers/mailer";

connect()

export async function POST(request: NextRequest){
try {
    const reqbody = await request.json()
    const {username,password,email} = reqbody

    // ip tracking 
    const ip = request.headers.get('x-forwared-for')?.split(',')[0].trim() || 'unknown'
    

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if(!isValidEmail){
        return NextResponse.json({
            error: {
                code: "INVALID_EMAIL",
                message: "please provide a valid email address"
            }
        },{status: 401})
    }

    console.log(`[SIGNUP ATTEMPT] IP: ${ip} | Email: ${email}`)

    const user = await User.findOne({
        $or: [{email},{username}]
    })
    if(user){
        return NextResponse.json(
            {
                error: {
                    code: "USER_EXIST",
                    message: "user already exist"
                }
    },{status: 401})
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
    // skipping email verification for now , as mailtrap is not working correctly
    // await SendMail({email,emailType: "VERIFY",userId: saved._id})
    return NextResponse.json({
        message: "User Registered Successfully",
        success: true,
        saved
    })
} catch (error) {
    console.log(error)
    return NextResponse.json({error: {
        code: "SERVER_ERROR",
        message: "error while signing up"
    }},{status: 501})
}
}