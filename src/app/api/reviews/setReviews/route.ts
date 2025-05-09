import Review from "@/models/ReviewSchema";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "@/dbconfig/dbConfig";
import "@/models/UserSchema";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const token = request.cookies.get('token')?.value || ''
        const secretKey = process.env.TOKEN_SECRET!
        const {movieid,reviews,rating} = reqBody
        // verify jwt token and retriving userid
       
        if(token){
            try {
                const decoded = jwt.verify(token,secretKey) as jwt.JwtPayload
                const userid = decoded.id
                const UpdatedReview = await Review.findOneAndUpdate({userid,movieid},{reviews,rating},{new: true,upsert: true})
                if(!UpdatedReview){
                    return NextResponse.json({error: "Problem while adding the review in database"},{status: 501})
                    }
                return NextResponse.json({message: "successfully saved in database"}, {status: 200})

            } catch (error: any) {
                console.log('error while decoding jwt',error.message)                
            }
        }
        else{
            return NextResponse.json({error: 'unauthorized request to fetch data'},{status: 401})
        }  
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({error: "error while adding review"}, {status: 501})
    }
}