import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import User from '@/models/UserSchema'
import { connect } from "@/dbconfig/dbConfig";
import Review from '@/models/ReviewSchema';

connect()

export async function GET() {
    try {
    const cookiesStore = cookies()
     const token = (await cookiesStore).get('token')?.value || ''
     const secretKey = process.env.TOKEN_SECRET!
     //checking token exist
    if(!token){
      return NextResponse.json({error: "invalid token"},{status: 401})
    }

    try {
             const userData =  jwt.verify(token,secretKey) as  jwt.JwtPayload
             try {
                const id = userData.id;
                // can i skip models.luser ? i would try it later
                const user = await User.findById(id, 'username email followers following')
                .lean()

                const reviews = await Review.find({userid: id})
                .lean()

                return NextResponse.json({user,reviews}, { status: 200 });
             } catch (error: any) {
                console.log(error.message)
                return NextResponse.json({error: "error while accessing database"},{status: 501})
             }
         } catch (error: any) {
          console.log(error)
          return NextResponse.json({error: 'token verification errors'},{status: 401})
         }
        
    } catch (error) {
        return NextResponse.json({error: 'error while checking token'},{status: 500})
    }
    
};
