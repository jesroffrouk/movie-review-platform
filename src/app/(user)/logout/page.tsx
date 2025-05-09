'use client'
import { useRouter } from "next/navigation"

function Page() {
    const router = useRouter()
    const logoutFunc = async() => {
        
        try {
            const request = await fetch('/api/user/logout')
            const response = await request.json()
            if(!response.error){
                console.log("logout successfull")
                router.push('/')
            }
        } catch (error:any) {
            console.log("error while logout", error.message)
        }
    }
  return (
    <div>
        <button className="btn btn-primary" onClick={logoutFunc}>Logout</button>      
    </div>
  )
}

export default Page
