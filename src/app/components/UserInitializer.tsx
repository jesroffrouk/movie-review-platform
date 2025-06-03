'use client'

import { useGetUserQuery } from "@/lib/features/api"
import { setUser } from "@/lib/features/authSlice"
import { useAppDispatch } from "@/lib/hooks"
import { useEffect } from "react"


function UserInitializer() {
    const dispatch = useAppDispatch()

    const {data,error} = useGetUserQuery()

    useEffect(() => {
        if(error && 'status' in error && error.status == 401){
            console.log("login token expired , kindly login", error.data)
        }
        if(data){

            dispatch(setUser(data))
        }
    },[data,error,dispatch])

    return null;
}

export default UserInitializer
