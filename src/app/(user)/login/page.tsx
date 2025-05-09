'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

function page() {
  const router = useRouter()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  
  const sendLogin = async(data: {})=>{
    try {
        const request = await fetch('/api/user/login',{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data)
        })
        const result = await request.json()
        if(!result.error){
            console.log("login successfull")
            router.push('/')
        }
        else{
            console.error("ERror: ", result.error)
        }
        
    } catch (error:any) {
        console.log("Error",error.message)
    }
  }
  return (
    <div>
        
        <div className="container shadow-md flex flex-col items-center min-h-screen min-w-full justify-center ">
        <h1 className="text-3xl font-bold m-10">Login</h1>
        <fieldset className="fieldset">
            <legend className="fieldset-legend m-2">Username:</legend>
            <input type="text" className="input" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
            <legend className="fieldset-legend m-2">Password:</legend>
            <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
            <button className="btn btn-primary m-2" onClick={()=>sendLogin({username,password})}>Login</button>
        </fieldset>
        </div>
    </div>
  )
}

export default page
