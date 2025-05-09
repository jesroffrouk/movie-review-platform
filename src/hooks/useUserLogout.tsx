import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/features/authSlice'

function useUserLogout() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const logoutFunc = async(e: any) => {
      e.preventDefault()
      try {
          const request = await fetch('/api/user/logout')
          const response = await request.json()
          if(!response.error){
            dispatch(logout())
              console.log("logout successfull")
              router.push('/moviezone')
          }
      } catch (error:any) {
          console.log("error while logout", error.message)
      }
    }
  return logoutFunc
}

export default useUserLogout
