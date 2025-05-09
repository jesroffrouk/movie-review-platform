'use client'
import Link from "next/link"
import Image from "next/image"
import { use } from "react"

export default function Card({movies}:{movies: Promise<Movie>}) {
  const allmovies = use(movies)
  return (
    <div className="grid grid-cols-3 gap-4 mt-3">
  {/* design */}
  {
    allmovies.map((movie) => (
      <div key={movie.imdbID}>
        <div className="card card-side bg-base-100 shadow-xl rounded-none">
          <figure>
            {movie.Poster !== 'N/A' && (
              <Image
                src={movie.Poster}
                alt="Movie"
                height={200}
                width={200}
              />
            )}
          </figure>
          <div className="card-body">
            <div className="h-[250px] w-[100px] flex flex-col bg-base-100 rounded-lg">
              <h2 className="card-title overflow-hidden">{movie.Title}</h2>
              <p>is released on {movie.Year}</p>
              <p>Click visit to know more.</p>
              <button className="btn btn-primary"><Link href={`/moviezone/${movie.imdbID}`}>Visit</Link></button>
            </div>
          </div>
        </div>
      </div>    
    ))
  }



    {/* <ul>
      {allmovies.map((movie)=>(
      <li key={movie.imdbID}>
         {movie.Poster !== 'N/A' && <Image 
            src={movie.Poster} 
            alt={movie.Title}
            width={150}
            height={150}
          />}
          <Link href={`/moviezone/${movie.imdbID}`}>Visit</Link>
    </li>))}
    </ul> */}
      
    </div>
  )
}

