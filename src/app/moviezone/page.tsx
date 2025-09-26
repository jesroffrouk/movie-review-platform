import { Suspense } from "react";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import { getMovies } from "./actions/actions";
import Loading from "./components/Loading";

export default async function Moviezone({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const params = await searchParams;
  const search = params?.search || '';
  const movies = getMovies(search)
  return (
    <div className="sm:mx-3 md:mx-6 mt-4 mb-8 min-h-screen">
      <Searchbar />
      {search != "" ? (
    <Suspense fallback={<Loading />}>
        <Card movies={movies} />
    </Suspense>): (
      <div className="flex items-center justify-center p-4">
  <div className="card bg-base-100 py-16 mb-2 w-full max-w-xl h-full flex items-center justify-center">
    <div className="card-body flex flex-col justify-center items-center text-center">
      <h3 className="text-2xl font-medium">Search for Movies</h3>
      <p className="opacity-70 mt-2 text-lg">
        Enter a Movie name and click the search button
      </p>
    </div>
  </div>
</div>
    )}
    </div>
  );
}

