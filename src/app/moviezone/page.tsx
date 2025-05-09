import { Suspense } from "react";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import { getMovies } from "./actions/actions";
import Loading from "./components/Loading";

export default async function moviezone({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const params = await searchParams;
  const search = params?.search || ''; 
  const movies = getMovies(search)
  return (
    <div className="ml-6">
      <h1 className="">Movie Zone</h1>
      <Searchbar />
      {search != "" && <Suspense fallback={<Loading />}>
        <Card movies={movies} />
    </Suspense>}
    </div>
  );
}

