import User from "@/models/UserSchema";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params} : { params: Promise<{ id: string }>}){
    const {id} = await params

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

    } catch (error: any) {
        console.log(error.message)
       NextResponse.json({error: 'error while accessing database'},{status: 501}) 
    }
}