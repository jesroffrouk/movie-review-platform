import { getFollowerList } from "@/helpers/getFollowerList";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
try {
    const {searchParams} = new URL(request.url)
    const idsParam = searchParams.get('ids')
    
    if(!idsParam){
        return NextResponse.json([],{status: 200})
    }
     const ids = idsParam.split(',')
     const users = await getFollowerList(ids)
     return NextResponse.json(users,{status: 200})
} catch (error) {
    console.log(error)
    return NextResponse.json({error: 'error in backend'},{status: 501})
}
}