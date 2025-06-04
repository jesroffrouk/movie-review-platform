'use client'

import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import ReviewLL from "@/app/profile/components/ReviewLL";
import { useGetUserDetailsQuery, useSetFollowMutation } from "@/lib/features/api";
import Image from "next/image";

export default function Card({username}: {username: string}){
   
    const {data: user, isLoading: loading } = useGetUserDetailsQuery(username)
    const [ setFollow ] = useSetFollowMutation()

    
    const [isFollowed,setIsFollowed] = useState(false)
    const loggedUser = useAppSelector((state)=>state.Auth.value)
   

    const handleFollow = async(followId: string) =>{
      // try {
        
      //   const id = loggedUser.id
      //   const request = await fetch(`/api/connect/${id}`,{
      //     method: 'PUT',
      //     credentials: 'include',
      //     headers: {
      //             'content-Type': 'application/json'
      //           },
      //     body: JSON.stringify({followId})
      //   })
      //   const response = await request.json()
      //   if(!response){
      //     console.log('error while accepting response')
      //   }
      //   setIsFollowed(true)
      // } catch (error: any) {
      //   console.log(error.message)
      // }

      // rtk query handling start
      try {
        const id = loggedUser.id
        await setFollow({id, followId , username}).unwrap()
        
      } catch (error) {
        console.log("error while following user")
        console.error(error)
      }
      
    }
    
    useEffect(()=>{
      //this useeffect is not working properly i need to fix this
         if(user?.user.followers.includes(loggedUser?.id)){
          setIsFollowed(true)
        }
       
    },[user?.user.followers,loggedUser.id])

    return (
    <>
    {loading ? (
    <>
  {/* loading.tsx */}
  <div className="flex justify-center my-2 animate-pulse">
  <div className="bg-gray-100 h-96 w-96 rounded shadow-sm">
    <div className="bg-gray-200 w-full h-56 rounded-t"></div>
    <div className="p-4 space-y-2">
      <div className="bg-gray-200 h-4 w-3/4"></div>
      <div className="bg-gray-200 h-4"></div>
      <div className="bg-gray-200 h-8 w-1/4 mx-auto"></div>
    </div>
  </div>
</div>
    </>) : 
    user ? 
    (<>
    <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      <div className="card card-side bg-base-100 shadow-sm min-h-80">
        <div className="card-body items-center text-center">
          <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
                src="/allmovies.jpg"
                alt={`${user.user.username}'s avatar`}
                width={200}
                height={200}
              />
          </div>
        </div>

          <h2 className="card-title text-2xl mt-4">{user.user.username}</h2>
          <p className="text-sm opacity-70">{user.user.email}</p>

          <div className="flex justify-center gap-8 my-4">
          <div className="text-center">
            <div className="stat-value">{user.user.followers.length}</div>
            <div className="stat-desc">Followers</div>
          </div>
          <div className="text-center">
            <div className="stat-value">{user.user.following.length}</div>
            <div className="stat-desc">Following</div>
          </div>
        </div>

          <div className="card-actions justify-end">
            { !(loggedUser.id == user.user._id) && <button className="btn btn-primary btn-sm gap-2" onClick={()=> user && handleFollow(user.user._id)} disabled={!user || isFollowed == true}>{isFollowed ? ('following'): ("follow")}</button>}
          </div>
        </div>
    </div>
    </div>
          <div className="lg:col-span-1">
                   <ReviewLL reviews={user.reviews} />
          </div>
    </div>
    </div>
    </>)
    : (
      <div>
      user not Found
      </div>
    )
    }
    </>);
}