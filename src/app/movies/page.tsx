"use client";
// import Carousel from "@/pages/Carousel";
import MovieCard from "@/pages/MovieCard";
import { useFetch } from "@/utils/useFetch";

export default function Movies() {
  const { data, loading, error } = useFetch("/discover/movie");
  console.log(data);
  console.log(data?.data?.results)
  console.log(loading);
  console.log(error);
  if (loading) return "Loading......";
  if (error) return "Error: " + error;
  return (
    <div>
      Movies
      {/* <Carousel /> */}

      <div className="cards flex flex-wrap gap-4 px-2 justify-center my-4 ">

        {
            data?.data?.results?.map((movie: any) => {
              return (
                <MovieCard key={movie.id} {...movie}  />
              );
            })
        }
      </div>
    </div>
  );
}
