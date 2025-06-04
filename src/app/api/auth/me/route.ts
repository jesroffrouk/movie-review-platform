
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


export async function GET(){
   try {
     const cookiesStore = cookies()
     const token = (await cookiesStore).get('token')?.value || ''
     const secretKey = process.env.TOKEN_SECRET!
     //checking token exist
    if(!token){
      return NextResponse.json({error: "invalid token"},{status: 401})
    }

    //checking if its a valid token
     try {
         const userData =  jwt.verify(token,secretKey)
         return NextResponse.json(userData, {status: 200})
     } catch (error) {
      console.log(error)
      return NextResponse.json({error: 'other errors'},{status: 401})
     }


   } catch (error) {
    console.log(error)
    return NextResponse.json({error: "error while checking the token"}, {status: 500})
   }
}