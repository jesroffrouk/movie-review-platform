import Review from "@/models/ReviewSchema";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbConfig";
import "@/models/UserSchema";

connect()


export async function POST(request: NextRequest){
    const reqBody = await request.json()
    const {userid} = reqBody
    const userReviewsData = await Review.find(userid)
    if(!userReviewsData){
        return NextResponse.json({error: "error while fetching review with userid"},{status: 501})
    }
    return NextResponse.json(userReviewsData, {status: 200})
}