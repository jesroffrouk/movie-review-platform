import User from "@/models/UserSchema"
import mongoose from "mongoose"


export async function getFollowerList(ids: string[]){
const objectIds = ids.map(id=> new mongoose.Types.ObjectId(id))
try {
    const users = await User.find({_id: {$in: objectIds}})
    .select('_id username email')
    .lean()
    
     return users
} catch (error: any) {
    console.log(error.message)
}
}