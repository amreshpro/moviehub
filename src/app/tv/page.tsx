"use client";
import MovieCard from "@/pages/MovieCard";
import { useFetch } from "@/utils/useFetch";

export default function Movies() {
  const { data, loading, error } = useFetch("/discover/tv");


  console.log(loading);
  console.log(error);
  if (loading) return "Loading......";
  if (error) return "Error: " + error;
  return (
    <div>
      TV Shows

      <div className="cards flex flex-wrap gap-4 px-2 justify-center my-4 ">

        {
            data?.data?.results?.map((tv: any) => {
              return (
                <MovieCard key={tv?.id} {...tv}  />
              );
            })
        }
      </div>
    </div>
  );
}
