'use client'
import { use } from "react"
import MovieCard from "./MovieCard"

export default function Card({movies}:{movies: Promise<Movie>}) {
  const allmovies = use(movies)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0 lg:gap-4 mt-7 mx-6">
  {/* design */}
  {
    allmovies.map((movie) => (
      // setting genre to movie type becoz my freaking api is not returning genre for this api call
      <MovieCard
        key={movie.imdbID}
        id={movie.imdbID}
        title={movie.Title}
        imageUrl={movie.Poster}
        releaseYear={movie.Year}
        genre={movie.Type}
      />   
    ))
  }
      
    </div>
  )
}

