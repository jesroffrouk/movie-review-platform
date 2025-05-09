import Review from "@/models/ReviewSchema"
import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/dbconfig/dbConfig";
import "@/models/UserSchema";



export async function POST(request: NextRequest) {
    await connect()
    const requestBody = await request.json()
    const {movieid} = requestBody
    const ReviewData = await Review.find({movieid}).populate('userid','username email')
    if (ReviewData.length === 0) {
      console.log("No reviews found for this movie.");
      return NextResponse.json({message: "couldnot find a movie"},{status: 200})
    }    
    if(!ReviewData){
      return  NextResponse.json({error: 'Problem with finding movieid in database'},{status: 501})
    }
    return NextResponse.json(ReviewData,{status: 200})
}

