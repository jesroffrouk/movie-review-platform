'use client'

import { use } from "react"
import Image from "next/image"
import ReviewSection from "./Review"


function Card({movieData}: {movieData: Promise<SingleMovie>}) {
  const movie = use(movieData)
  return (
    <div className="flex flex-col">
    <div className="movie-hero flex flex-col items-center border-b-2 border-black mb-2">
      <h1 className="text-6xl font-semibold p-4">{movie.Title}</h1>
      <Image src={movie.Poster} alt="image of movie" height={200} width={300} />
    </div>


    <div className="movie-description px-32">
    <div className="Description px-20">
    <span className="text-lg font-bold">Plot </span>:
      <p>{movie.Plot}</p>
      <p><span className="text-lg font-bold">Runtime </span>: {movie.Runtime}</p>
      <p><span className="text-lg font-bold">Language </span>: {movie.Language}</p>
      <p><span className="text-lg font-bold">Genre </span>: {movie.Genre}</p>
      <p><span className="text-lg font-bold">Year </span>: {movie.Year}</p>
      </div>

    <ReviewSection movieId={movie.imdbID} />
   </div>
      
    </div>
  )
}

export default Card
