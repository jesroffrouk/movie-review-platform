'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Followers({user}: {user: UserWreviews}){

    const [followersList, setFollowersList] = useState([])

    useEffect(()=>{
        async function handleFollowers(){
            const query = user?.user.followers.join(',')
            const request = await fetch(`/api/authserver/profileInfo/followersList?ids=${query}`,{
                method: 'GET',
                credentials: 'include',
            })
            const response = await request.json()
            setFollowersList(response)
        }
        handleFollowers()
    },[user?.user.followers])

    return(
        <>
        <div className="min-h-screen flex items-start justify-center">
          <div className="w-full max-w-sm px-4">
            <p className="text-center">people who follows you</p>
            {followersList.length > 0  ? (followersList.map((user: User) => (
              <Link href={`/find/${user.username}`} key={user._id}>
                <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow mb-2">
                  <div className="card-body p-4">
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <Image
                              src="/cartoon.jpg" 
                              alt={user.username}
                              width={300}      
                              height={300}      
                            />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{user.username}</h3>
                        <p className="text-sm opacity-70">{user.email}</p>
                      </div>
                      <div className="hidden sm:flex flex-col items-end"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))):(<p className="text-center">No one</p>) }
          </div>
        </div>

        
        </>
    )
}