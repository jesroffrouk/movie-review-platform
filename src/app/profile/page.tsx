'use client'
import React, { useState , useEffect } from 'react'
import UserProfile from './components/UserProfile';
import Followers from './components/Followers';
import Following from './components/Following';

export default function Profile() {
  const [tab , setTab] = useState<"profile" | "followers" | "following">("profile");

  const [user,setUser] = useState<UserWreviews | null>(null);

  useEffect(()=>{
    const sendRequest = async()=>{
      try {
    const request = await fetch('/api/auth/profile')
    const response = await request.json()
    console.log(response)
    setUser(response)
  } catch (error: any) {
    console.error(error.message)
  }
    }
    sendRequest()
    
  },[])
  return (
    <>
<div className="tabs tabs-lift">
  <input 
    type="radio" 
    name="my_tabs_1" 
    className="tab" 
    aria-label="PROFILE" 
    onChange={()=>setTab("profile")}
    checked={tab == 'profile'}
    />
  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab" 
  onChange={()=>setTab("followers")}
    checked={tab == 'followers'}
  aria-label="FOLLOWERS"  />
  <input 
  type="radio" 
  name="my_tabs_1" 
  className="tab" 
  onChange={()=>setTab("following")}
    checked={tab == 'following'}
  aria-label="FOLLOWING" />
</div>

<div className="mt-4">
        {tab === "profile" && <UserProfile user={user}/>}
        {tab === "followers" && <Followers user={user} />}
        {tab === "following" && <Following user={user} />}
      </div>

    </>
  )
}

