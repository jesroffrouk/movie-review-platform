'use client'

import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import ReviewLL from "@/app/profile/components/ReviewLL";

export default function Card({username}: {username: string}){
    const [user,setUser] = useState<UserWreviews | null>(null)
    const [loading,setLoading] = useState(false)
    const [isFollowed,setIsFollowed] = useState(false)
    const loggedUser = useAppSelector((state)=>state.Auth.value)
    useEffect(()=>{
        const handleAsync = async() =>{
          setLoading(true)
            const request = await fetch('/api/user/finduserdetails',{
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({username})
            })
            
            const response = await request.json()
            setUser(response)
            console.log(user)
            setLoading(false)
        }
        handleAsync()
    },[])

    const handleFollow = async(followId: string) =>{
      try {
        
        const id = loggedUser.id
        const request = await fetch(`/api/connect/${id}`,{
          method: 'PUT',
          credentials: 'include',
          headers: {
                  'content-Type': 'application/json'
                },
          body: JSON.stringify({followId})
        })
        const response = await request.json()
        if(!response){
          console.log('error while accepting response')
        }
        setIsFollowed(true)
      } catch (error: any) {
        console.log(error.message)
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
    <div className="flex justify-center my-2">
      <div className="card card-side bg-base-100 shadow-sm w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Username: {user.user.username}</h2>
          <p>Mail: {user.user.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> user && handleFollow(user.user._id)} disabled={!user || isFollowed == true}>{isFollowed ? ('following'): ("follow")}</button>
          </div>
        </div>
    </div>
    </div>
    <ul className="list bg-base-100 rounded-box shadow-md">
          {user && user.reviews.map((review)=>(
            <ReviewLL key={review._id}  review={review}/>
          ))}
        </ul>
    </>)
    : (
      <div>
      user not Found
      </div>
    )
    }
    </>);
}