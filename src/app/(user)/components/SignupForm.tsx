'use client'

import { useState } from "react"
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react"

interface SignupFormProps {
  onSwitchToLogin: () => void
}

function Page({ onSwitchToLogin }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  })
  const [error, setError] = useState('')

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    try {
        const request = await fetch('/api/user/signup',{
            method: 'POST',
            body: JSON.stringify(formData)
        })
        const result = await request.json()
        if(!result.error){
            console.log("signup successfull")
            onSwitchToLogin()
        }
        else{
          // error handling
          if(result.error.code == 'USER_EXIST'){
            setError('username or email already exist')
          }
          else if(result.error.code == 'INVALID_EMAIL'){
            setError('please provide a valid email address')
          }
          else if(result.error.code == 'SERVER_ERROR'){
            setError("internal server ERror")
          }
        }
        
    } catch (error) {
        console.error(error)
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
          <h1 className="text-3xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-base-content/70">Join us today and get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full pl-12 focus:input-primary transition-all duration-200"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/50 w-4 h-4" />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
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
                placeholder="Create a password"
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
            <label className="label">
              <span className="label-text-alt text-base-content/60">Must be at least 8 characters long</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer justify-start">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" required />
              <span className="label-text ml-3">
                I agree to the{" "}
                <a href="#" className="link link-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="link link-primary">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
            {
              error && (<div className="text-red-700 font-medium text-center">{error}</div>)
            }
          <button type="submit" className="btn btn-primary w-full text-white">
            Create Account
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-base-content/70">
            Already have an account?{" "}
            <button onClick={onSwitchToLogin} className="link link-primary font-medium">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
