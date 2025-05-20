
import { connect } from "@/dbconfig/dbConfig";
import Review from "@/models/ReviewSchema";
import User from "@/models/UserSchema";
import jwt, { Jwt } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest){
    // fuckkkk.. convert into to get method , i am not changing the data so wtf i am using Post
    const reqbody = await request.json()
    const {username} =reqbody

         const cookiesStore = cookies()
         const token = (await cookiesStore).get('token')?.value || ''
         const secretKey = process.env.TOKEN_SECRET!
         //checking token exist
        if(!token){
          return NextResponse.json({error: "invalid token"},{status: 401})
        }
    
        //checking if its a valid token
         try {
             const userData =  jwt.verify(token,secretKey) as jwt.JwtPayload
             const userid = userData.id
             try {
                const user = await User.findOne({username})
                .select('username email followers following')
                .lean() as User | null

                if (!user) {
                    return NextResponse.json({ error: 'User not found' }, { status: 404 })
                }

                const isFollowing = user.followers.some(
                    id => id.toString() === userid
                )

                let reviews = []
                
                if(isFollowing){
                    reviews = await Review.find({userid})
                }

                return NextResponse.json({user,reviews},{status: 200})
            } catch (error: any) {
                console.log(error.message)
                return NextResponse.json({error: 'error while accessing database'},{status: 501})
                
            }
         } catch (error: any) {
          console.log(error)
          return NextResponse.json({error: 'other errors'},{status: 401})
         }

    


}