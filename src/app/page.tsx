"use client"
import Carousel from "@/pages/Carousel";
import Shimmer from "@/pages/Shimmer";
import { useFetch } from "@/utils/useFetch";


export default function Hero() {
  const { data:movieData, loading:loadingMovie} =
    useFetch("/trending/movie/day");
    const { data : TVData, loading:loadingTV} =
    useFetch("/trending/tv/day");
    if(loadingMovie || loadingTV) return <Shimmer/>

  return <div className="hero">
    <h1 className="px-2 mx-2 text-xl mb-5">Movie of the Day</h1>
    <div className="movie-day">
      <Carousel data={movieData} />
    </div>
    <h1 className="mx-2 px-2 text-xl mb-5">TV Show of the Day</h1>

    <div className="tv-day">
      <Carousel data={TVData} />
    </div>
  </div>
}
