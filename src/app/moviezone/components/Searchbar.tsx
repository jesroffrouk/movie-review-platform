'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import useNetworkStatus from "@/hooks/useNetworkStatus"

const Searchbar =()=>{
const [search,setSearch] = useState<string>('')
const isOnline = useNetworkStatus()


const router = useRouter();

const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  if(isOnline == true){
    router.push(`/moviezone/?search=${search}`); 
  }
};
    return (
      <>
      <div className="w-full px-10 sm:p-auto m-auto max-w-4xl ">
        <form onSubmit={handleSearch}>
            <label className="input input-bordered w-full flex items-center gap-2">
          <input 
            type="text" 
            className="flex-1 sm:w-auto bg-transparent outline-none" 
            placeholder="Search movies..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70 cursor-pointer"
            onClick={handleSearch}
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>      
        </form>
      </div>

      
      </>
    )
  }

export default Searchbar
  