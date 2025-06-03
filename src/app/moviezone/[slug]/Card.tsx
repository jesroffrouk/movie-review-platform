'use client'

import { use } from "react"
import ReviewSection from "./Review"
import { Star, Clock, Globe, Film, Calendar } from "lucide-react"


function Card({movieData}: {movieData: Promise<SingleMovie>}) {
  const movie = use(movieData)
  return (
    <div className="min-h-screen bg-base-200 pb-8">
      <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Movie Image and Title */}
      <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
          {/* Movie Poster (Vertical) */}
          <figure className="relative lg:w-1/3 max-w-sm">
            <img
              src={movie.Poster}
              alt="Movie Poster"
              className="h-full w-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
            />
          </figure>

          <div className="card-body lg:w-2/3">
            <h1 className="card-title text-4xl font-bold">{movie.Title}</h1>

            <div className="flex flex-wrap gap-2 my-3">
              {movie.Genre.split(',').map((genre, index) => {
              const badgeStyles = ["badge-primary", "badge-secondary", "badge-accent"];
              const styleClass = badgeStyles[index % badgeStyles.length]; // Cycle through styles

              return (
                <div key={index} className={`badge ${styleClass}`}>
                  {genre.trim()}
                </div>
              );
            })}
            </div>

            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Rated: {movie.Rated}</span>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="flex items-center">
                <Clock className="mr-2 text-primary" />
                <span>
                  <span className="font-semibold">Runtime:</span> {movie.Runtime}
                </span>
              </div>

              <div className="flex items-center">
                <Calendar className="mr-2 text-primary" />
                <span>
                  <span className="font-semibold">Year:</span> {movie.Released}
                </span>
              </div>

              <div className="flex items-center">
                <Globe className="mr-2 text-primary" />
                <span>
                  <span className="font-semibold">Language:</span> {movie.Language}
                </span>
              </div>
            </div>

            {/* Plot */}
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Film className="mr-2" /> Plot
              </h3>
              <p className="text-base-content/80">
                {movie.Plot}
              </p>
            </div>
          </div>
        </div>
        <ReviewSection movieId={movie.imdbID} />
    </div>
  </div>
  )
}

export default Card
