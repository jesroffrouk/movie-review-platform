import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = NextResponse.json({message: "user logout successfully"},{status: 200})
    
        response.cookies.set('token','',{
            httpOnly: true,
            expires: new Date(),
        })
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 400})
    }
}