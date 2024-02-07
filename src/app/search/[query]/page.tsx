"use client";

import MovieCard from "@/pages/MovieCard";
import { useFetch } from "@/utils/useFetch";
import { useParams } from "next/navigation";

export default function SearchList() {
const router = useParams<{query:string}>();
console.log(router)
const {data,loading} = useFetch(`/search/multi?query=${router?.query}`)
if(loading) return 'loading....'
console.log(data)
 if(loading) return 'loading...'
   
 return (
    <div>
{router?.query && <h1>Your searched for "{router?.query.split('%20').join(" ")}"</h1>}

<div className="container flex flex-wrap gap-6 px-2 justify-center my-4 ">
    {data?.data?.results?.map((movie: any) => {
      return (
        <MovieCard key={movie.id} {...movie}  />
      );
    })}
  
</div>


    </div>
  )
}