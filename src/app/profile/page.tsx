'use client'
import React, { useState } from 'react'
import UserProfile from './components/UserProfile';
import Followers from './components/Followers';
import Following from './components/Following';
import { useGetUserInfoQuery } from '@/lib/features/api';

export default function Profile() {
  const [tab , setTab] = useState<"profile" | "followers" | "following">("profile");
  const {data: user , isLoading, isError} = useGetUserInfoQuery()
  console.log(user)
  if(isError){
    return (
      <div className='text-center font-bold text-3xl text-red-700'>INTERNAL SERVER ERROR</div>
    )
  }
  return (
    <>
    {isLoading && 
    <div>
      {/* Tabs Skeleton */}
      <div className="tabs tabs-lift flex justify-center items-center mt-3">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="tab w-24 h-6 bg-gray-300 rounded-md animate-pulse"
          />
        ))}
      </div>

      {/* Content Skeleton */}
      <div className="mt-4">
        <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: User Card Skeleton */}
            <div className="lg:col-span-1">
              <div className="card bg-base-100 shadow-xl p-4 animate-pulse">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="avatar">
                    <div className="w-24 h-24 rounded-full bg-gray-300" />
                  </div>

                  <div className="w-3/4 h-6 bg-gray-300 rounded" />
                  <div className="w-2/3 h-4 bg-gray-300 rounded opacity-70" />

                  <div className="flex justify-center gap-8 my-4 w-full">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-6 bg-gray-300 rounded" />
                      <div className="w-12 h-3 bg-gray-200 rounded" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-6 bg-gray-300 rounded" />
                      <div className="w-12 h-3 bg-gray-200 rounded" />
                    </div>
                  </div>

                  <div className="w-24 h-8 bg-gray-300 rounded" />
                </div>
              </div>
            </div>

            {/* Right: Reviews Skeleton */}
            <div className="lg:col-span-2 space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded shadow animate-pulse">
                  <div className="w-1/2 h-5 bg-gray-300 rounded mb-2" />
                  <div className="w-full h-4 bg-gray-200 rounded mb-1" />
                  <div className="w-3/4 h-4 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    {user && 
    <>
    <div className="tabs tabs-lift flex justify-center items-center mt-3">
  <input 
    type="radio" 
    name="my_tabs_1" 
    className="tab" 
    aria-label="profile" 
    onChange={()=>setTab("profile")}
    checked={tab == 'profile'}
    />
  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab" 
  onChange={()=>setTab("followers")}
    checked={tab == 'followers'}
  aria-label="followers"  />
  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab" 
  onChange={()=>setTab("following")}
    checked={tab == 'following'}
  aria-label="following" />
</div>

<div className="mt-4">
        {tab === "profile" && <UserProfile user={user}/>}
        {tab === "followers" && <Followers user={user} />}
        {tab === "following" && <Following user={user} />}
      </div>
    </>}

    </>
  )
}

