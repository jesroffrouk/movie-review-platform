
import { connect } from "@/dbconfig/dbConfig";
import Review from "@/models/ReviewSchema";
import User from "@/models/UserSchema";
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest){

    const {searchParams} = new URL(request.url)
    const targetUsername = searchParams.get("id") as string

         const cookiesStore = cookies()
         const token = (await cookiesStore).get('token')?.value || ''
         const secretKey = process.env.TOKEN_SECRET!
         //checking token exist
        if(!token){
          return NextResponse.json({error: "invalid token"},{status: 401})
        }
    
        //checking if its a valid token
         try {
             const loggedUserData =  jwt.verify(token,secretKey) as jwt.JwtPayload
             const loggedUserid = loggedUserData.id
             try {
                const targetUserData = await User.findOne({username: targetUsername})
                .select('username email followers following')
                .lean() as User | null

                if (!targetUserData) {
                    return NextResponse.json({ error: 'User not found' }, { status: 404 })
                }
                
                const isFollowing = targetUserData.followers.some(
                    id => id.toString() === loggedUserid
                )

                let reviews = []
                
                if(isFollowing){
                    reviews = await Review.find({userid: targetUserData._id})
                }

                return NextResponse.json({user: targetUserData,reviews},{status: 200})
            } catch (error) {
                console.log(error)
                return NextResponse.json({error: 'error while accessing database'},{status: 501})
                
            }
         } catch (error) {
          console.log(error)
          return NextResponse.json({error: 'other errors'},{status: 401})
         }

    


}