import User from "@/models/UserSchema";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id") as string

    const reqbody = await request.json()
    const {followId} = reqbody


    try {
        const updatedUser = await User.findByIdAndUpdate(id,{$addToSet: {following: followId}},{ new: true })
        if(!updatedUser){
            return NextResponse.json({error: 'updated user not found'},{status: 404})
        }

        const followingUser = await User.findByIdAndUpdate(followId, {$addToSet: {followers: id}},{new: true})
        if(!followingUser){
            return NextResponse.json({error: 'following user not found'},{status: 404})
        }

       return NextResponse.json({message: 'successfully updated'},{status: 200})

    } catch (error) {
        console.log(error)
       NextResponse.json({error: 'error while accessing database'},{status: 501}) 
    }
}