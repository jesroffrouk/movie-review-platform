'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

function page() {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  
  const sendSignup = async(data: {})=>{
    try {
        const request = await fetch('/api/user/signup',{
            method: 'POST',
            body: JSON.stringify(data)
        })
        const result = await request.json()
        if(!result.error){
            console.log("signup successfull")
            router.push('/login')
        }
        else{
            console.error("ERror: ", result.error)
        }
        
    } catch (error:any) {
        console.error("Error",error.message)
    }
  }
  return (
    <div>
        
        <div className="container shadow-md flex flex-col items-center justify-center m-2 min-h-screen max-w-full">
        <h1 className="m-10 text-3xl font-bold">Sign up</h1>
        <fieldset className="fieldset">
            <legend className="fieldset-legend m-2">Email:</legend>
            <input type="email" className="input" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <legend className="fieldset-legend m-2">Username:</legend>
            <input type="text" className="input" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)} />
            <legend className="fieldset-legend m-2">Password:</legend>
            <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
            <button className="btn btn-primary m-2" onClick={()=>sendSignup({email,username,password})}>Sign up</button>
        </fieldset>
        </div>
    </div>
  )
}

export default page
