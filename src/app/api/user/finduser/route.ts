import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/UserSchema";
import { NextRequest,NextResponse } from "next/server";

connect();
// change it to GET method
export async function GET(request: NextRequest){
 
    const {searchParams} = new URL(request.url)
    const searchQuery = searchParams.get('searchQuery')


    try {
        const users = await User.find({username: {$regex: searchQuery, $options: 'i'}})
        .select('username email followers following')
        .lean()
        const result = users.map((user)=>({
            _id: user._id,
            username: user.username,
            email: user.email,
            followersCount: user.followers.length,
            followingCount: user.following.length,
        }))
        return NextResponse.json(result,{status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "error while extracting from database"},{status: 501})
    }

    

    
}