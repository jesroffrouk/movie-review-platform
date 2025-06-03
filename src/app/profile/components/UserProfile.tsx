import React from 'react'
import ReviewLL from './ReviewLL'
import { LogOut } from 'lucide-react'
import useUserLogout from "@/hooks/useUserLogout";

export default function UserProfile({user}: {user: UserWreviews}) {
  const logoutFunc = useUserLogout()
  
  return (
    <>
    <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          {/* user profile component */}
          <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={"/allmovies.jpg"} alt={`${user.user.username}'s avatar`} />
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

        <div className="card-actions">
          <button className="btn btn-primary btn-sm gap-2" onClick={logoutFunc}>
            <LogOut />
            logout
          </button>
        </div>
      </div>
    </div>

        </div>
        <div className="lg:col-span-2">
          <ReviewLL reviews={user.reviews} />
        </div>
      </div>
    </div>
    </>
   
  )
}


