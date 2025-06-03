'use client'
import Link from "next/link"
import { useState } from "react"

export default function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<Userlist[] | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async() => {
    setIsSearching(true)

    // backend calls 
    const request = await fetch(`/api/user/finduser?searchQuery=${searchQuery}`)
    const response = await request.json()
    setResults(response)
    setIsSearching(false)
  }

  return (
    <div className="max-w-4xl mx-auto mt-3 min-h-screen">
      <div className="flex gap-2 w-full px-10 sm:p-auto m-auto">
        <input
          type="text"
          placeholder="Search users by name, email, role or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="input input-bordered flex-1"
        />
        <button onClick={handleSearch} disabled={isSearching} className="btn btn-primary">
          {isSearching ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Searching
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </>
          )}
        </button>
      </div>

      {isSearching ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-md animate-pulse">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="skeleton w-12 h-12 rounded-full"></div>
                  <div className="flex-1">
                    <div className="skeleton h-4 w-1/4 mb-2"></div>
                    <div className="skeleton h-4 w-1/3"></div>
                  </div>
                  <div className="skeleton h-4 w-1/5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : results ? (
        results.length > 0 ? (
          <div className="space-y-4 mt-3 ">
            {results.map((user) => (
              <Link href={`/find/${user.username}`} key={user._id} >
              <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow mb-2">
                <div className="card-body p-4">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={"./cartoon.jpg"} alt={user.username} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{user.username}</h3>
                      <p className="text-sm opacity-70">{user.email}</p>
                    </div>
                    <div className="hidden sm:flex flex-col items-end">
                      <div>
                      Followers:<span className="badge badge-sm">{user.followersCount}</span>
                      Following:<span className="badge badge-sm">{user.followingCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
         
        ) : (
          <div className="text-center py-12 card bg-base-100 shadow mb-2">
            <div className="card-body">
              <h3 className="text-lg font-medium">No users found</h3>
              <p className="opacity-70">Try adjusting your search query</p>
            </div>
          </div>
        )
      ) : (
        <div className="h-screen flex items-center justify-center p-4">
        <div className="card bg-base-100 py-16 mb-2 w-full max-w-xl h-full flex items-center justify-center">
          <div className="card-body flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-medium">Search for Users</h3>
            <p className="opacity-70 mt-2 text-lg">
              Enter a User name and click the search button
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

