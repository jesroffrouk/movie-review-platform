'use client'

import Link from "next/link"
import { Film } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface MovieCardProps {
  id: string
  title: string
  imageUrl: string
  releaseYear: number
  genre?: string
  fallback?: string
}

export default function MovieCard({
  id,
  title,
  imageUrl,
  releaseYear,
  genre = "Action",
  fallback = "/allmovies.jpg",
}: MovieCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl === "N/A" ? fallback : imageUrl)
  const [isHovered, setIsHovered] = useState(false)

  return (
<div
      className="card w-full max-w-md sm:max-w-xs md:max-w-md lg:max-w-xs xl:max-w-sm bg-base-100 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group mx-auto"
      style={{
        borderRadius: "20px",
        background: "linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative h-48 xs:h-56 sm:h-60 md:h-72 lg:h-64 xl:h-72 overflow-hidden">
        {imgSrc ? (
          <>
            <Image
              src={imgSrc}
              alt={title}
              width={500}
              height={300}
              onError={() => setImgSrc(fallback)}
              className={`object-cover w-full h-full transition-all duration-700 ${
                isHovered ? "scale-110 brightness-110" : "scale-100"
              }`}
            />
            {/* Animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
            
            {/* Subtle animated particles effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-6 lg:left-6 xl:top-10 xl:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-8 right-6 sm:top-12 sm:right-8 md:top-16 md:right-12 lg:top-12 lg:right-8 xl:top-20 xl:right-16 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-12 left-8 sm:bottom-16 sm:left-10 md:bottom-20 md:left-12 lg:bottom-16 lg:left-10 xl:bottom-24 xl:left-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
            <Film className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-24 xl:h-24 text-gray-400 drop-shadow-lg animate-pulse" />
          </div>
        )}
        
        {/* Floating genre badge with glow effect - responsive sizing */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 transform transition-all duration-300 group-hover:scale-110">
          <span 
            className="badge badge-sm sm:badge-md md:badge-lg font-bold text-white px-2 py-1 sm:px-3 sm:py-2 shadow-lg text-xs sm:text-sm"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 15px -4px rgba(245, 158, 11, 0.5)",
              borderRadius: "8px sm:12px"
            }}
          >
            {genre}
          </span>
        </div>
        
        {/* Enhanced title section with better typography - responsive padding and text */}
        <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 text-white">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-lg xl:text-2xl font-bold mb-1 sm:mb-2 drop-shadow-2xl leading-tight line-clamp-2 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
              {title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                <p className="text-xs sm:text-sm font-medium opacity-90 tracking-wide">{releaseYear}</p>
              </div>
              {/* Rating placeholder or additional info */}
              <div className="flex space-x-0.5 sm:space-x-1">
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full"></div>
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/40 rounded-full"></div>
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </figure>
      
      {/* Enhanced card body with responsive padding */}
      <div className="card-body p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 pt-3 sm:pt-4 md:pt-5">
        <div className="flex items-center justify-between">
          <Link href={`/moviezone/${id}`} className="w-full">
            <button
              className="btn btn-sm sm:btn-md lg:btn-sm xl:btn-lg w-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] border-none group/btn text-xs sm:text-sm md:text-base lg:text-sm xl:text-base"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
                borderRadius: "10px sm:12px md:14px",
                boxShadow: "0 8px 20px -8px rgba(139, 92, 246, 0.4)",
              }}
            >
              <span className="flex items-center justify-center space-x-1 sm:space-x-2 group-hover/btn:space-x-2 sm:group-hover/btn:space-x-3 transition-all duration-300">
                <span>View Details</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
        
        {/* Optional: Add a subtle bottom accent - responsive sizing */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 rounded-full"></div>
      </div>
    </div>
  )
}
