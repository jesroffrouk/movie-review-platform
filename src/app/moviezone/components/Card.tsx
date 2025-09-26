'use client'
import { use } from "react"
import MovieCard from "./MovieCard"

export default function Card({movies}:{movies: Promise<Movie>}) {
  const allmovies = use(movies)
  return (
<div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        {allmovies.map((movie) => (
          <div 
            key={movie.imdbID}
            className="flex justify-center w-full"
          >
            <MovieCard
              id={movie.imdbID}
              title={movie.Title}
              imageUrl={movie.Poster}
              releaseYear={movie.Year}
              genre={movie.Type}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

