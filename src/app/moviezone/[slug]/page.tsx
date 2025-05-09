import { getSingleMovie } from "../actions/actions"
import Card from "./Card"


export default async function SinglePage({params}:{params: Promise<{ slug: string }>}) {
  const param = await params
  const id = param?.slug || ''
  const movieData =getSingleMovie(id)
  return (
    <>
      <Card movieData={movieData}  />
    </>
  )
}
