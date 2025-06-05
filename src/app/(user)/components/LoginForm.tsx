'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff, User, Lock } from "lucide-react"

interface LoginFormProps {
  onSwitchToSignup: () => void
}

function Page({ onSwitchToSignup }: LoginFormProps) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
     try {
        const request = await fetch('/api/user/login',{
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        const result = await request.json()
        if(!result.error){
            window.location.href = '/'
        }
        else{
          // error handling 
            if(result.error.code == 'USER_NOT_EXIST'){
              setError("user doesnot exist")
            }else if(result.error.code == 'INCORRECT_USER_PASSWORD'){
              setError("please provide correct username or password")
            }
            else if(result.error.code == "SERVER_ERROR"){
              setError("server error")
            }
        }
        
    } catch (error) {
        console.log(error)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
     <div className="card bg-base-100 shadow-2xl border border-base-300">
      <div className="card-body p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
          <p className="text-base-content/70">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="input input-bordered w-full pl-12 focus:input-primary transition-all duration-200"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50 w-4 h-4" />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pl-12 pr-12 focus:input-primary transition-all duration-200"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50 w-4 h-4" />
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
              <span className="label-text ml-2">Remember me</span>
            </label>
            <a href="#" className="link link-primary text-sm">
              Forgot password?
            </a>
          </div>
            {
              error && (<div className="font-medium text-red-700 text-center">{error}</div>)
            }
          <button type="submit" className="btn btn-primary w-full text-white">
            Sign In
          </button>
        </form>


        <div className="text-center mt-6">
          <p className="text-base-content/70">
            {"Don't have an account? "}
            <button onClick={onSwitchToSignup} className="link link-primary font-medium">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
