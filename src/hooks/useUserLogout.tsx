import { useAppDispatch } from '@/lib/hooks'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/features/authSlice'

function useUserLogout() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const logoutFunc = async(e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      try {
          const request = await fetch('/api/user/logout')
          const response = await request.json()
          if(!response.error){
            dispatch(logout())
              router.push('/moviezone')
          }
      } catch (error) {
          console.log(error)
      }
    }
  return logoutFunc
}

export default useUserLogout
