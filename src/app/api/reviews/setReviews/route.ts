import Review from "@/models/ReviewSchema";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "@/dbconfig/dbConfig";
import "@/models/UserSchema";

connect()

export async function PUT(request: NextRequest){
    try {
        const {searchParams} = new URL(request.url)
        const movieid = searchParams.get('id')

        const reqBody = await request.json()
        const token = request.cookies.get('token')?.value || ''
        const secretKey = process.env.TOKEN_SECRET!
        const {title,reviews,rating} = reqBody
        // verify jwt token and retriving userid
        if(reviews == ''){
            return NextResponse.json({error: {
                code: 'EMPTY_REVIEW',
                messsage: "reviews is empty"
            }},{status: 401})
        }
    //    simplify this error catch later
        if(token){
            try {
                const decoded = jwt.verify(token,secretKey) as jwt.JwtPayload
                const userid = decoded.id
                const UpdatedReview = await Review.findOneAndUpdate({userid,movieid},{title,reviews,rating},{new: true,upsert: true})
                if(!UpdatedReview){
                    return NextResponse.json({error: {
                        code: "DB_ERROR",
                        message: "Problem while adding the review in database",
                    }},{status: 401})
                    }
                return NextResponse.json({message: "successfully saved in database"}, {status: 200})

            } catch (error) {
                console.log('error while decoding jwt',error)     
                return NextResponse.json({error: 
                {
                    code: "UNAUTHORIZED_REQUEST",
                    message:'unauthorized request to fetch data'
                }},{status: 401})           
            }
        }
        else{
            return NextResponse.json({error: 
                {
                    code: "UNAUTHORIZED_REQUEST",
                    message:'unauthorized request to fetch data'
                }},{status: 401})
        }  
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: 
            {
                code: "SERVER_ERROR",
                message:"error while adding review"

            }
            }, {status: 501})
    }
}