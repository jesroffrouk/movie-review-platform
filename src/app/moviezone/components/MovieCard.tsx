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
      className="card w-80 bg-base-100 shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
      style={{
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative h-64 overflow-hidden">
        {imgSrc ? (
          <>
            <Image
              src={imgSrc}
              alt={title}
              width={500}
              height={300}
              onError={() => setImgSrc(fallback)}
              className={`object-cover w-full h-full transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
            <Film className="w-20 h-20 text-gray-400" />
          </div>
        )}

        <div className="absolute top-3 right-3">
          <span className="badge badge-primary badge-lg font-semibold">{genre}</span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h2 className="text-2xl font-bold mb-1 drop-shadow-md">{title}</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-90">{releaseYear}</p>
          </div>
        </div>
      </figure>

      <div className="card-body p-5">
        <div className="flex items-center justify-between">
          <Link href={`/moviezone/${id}`} className="w-full">
            <button
              className="btn btn-primary btn-sm w-full font-medium transition-all duration-300 hover:shadow-lg hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                border: "none",
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
