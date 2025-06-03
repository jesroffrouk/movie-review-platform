'use server'

const apikey = process.env.API_KEY!
const getMovies = async(search: string): Promise<Movie> =>{
  try {
     const searchQuery = encodeURIComponent(search)
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${searchQuery}`)
    const movies = await response.json()
    return movies.Search ?? []
  } catch (error) {
    console.error("fetch failed")
    throw error
  }
   
  }

const getSingleMovie = async(id: string): Promise<SingleMovie> =>{
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
    const moviedetails = await response.json()
    return moviedetails ?? {}
  } catch (error) {
    console.error('api fetch failed!!')
    throw error
  }
}

export {getMovies,getSingleMovie}