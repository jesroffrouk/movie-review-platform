'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Followers({user}: {user: UserWreviews | null}){

    const [followersList, setFollowersList] = useState([])

    useEffect(()=>{
        async function handleFollowers(){
            const query = user?.user.followers.join(',')
            console.log(query)
            const request = await fetch(`/api/auth/profile/followersList?ids=${query}`,{
                method: 'GET',
                credentials: 'include',
            })
            const response = await request.json()
            console.log(response)
            setFollowersList(response)
        }
        handleFollowers()
    },[])

    return(
        <>
        <p>people you follow</p>
        {followersList && followersList.map((user : User) => (
              <Link href={`/find/${user.username}`} key={user._id} >
              <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow mb-2">
                <div className="card-body p-4">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={"./cartoon.jpg"} alt={user.username} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{user.username}</h3>
                      <p className="text-sm opacity-70">{user.email}</p>
                    </div>
                    <div className="hidden sm:flex flex-col items-end">
                        </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
        </>
    )
}