'use client'
import { useSearchParams } from "next/navigation"
import { useState } from "react"

function page() {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const [isVerified,setIsVerified] = useState(false)
    const checkToken = async() =>{
       try {
         const request = await fetch('/api/verifyemail',{
             method: 'POST',
             body: JSON.stringify(token)
         })
         const response = await request.json()
         if(response.error){
             console.error('Error', response.error);
         }
         else{
             setIsVerified(true)
         }
     }
       catch (error:any) {
        console.error(error.message)
       }
    }
  return (
    <div>
        Token:{token}
        <button className="btn btn-primary" onClick={checkToken}>{isVerified ? 'verified':'Verify'}</button>
    </div>
  )
}
export default page
