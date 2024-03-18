"use client"
import Carousel from "@/pages/Carousel";
import Shimmer from "@/pages/Shimmer";
import { useFetch } from "@/utils/useFetch";


export default function Hero() {
  const { data, loading, error, page, setPage, totalPages } =
    useFetch("/trending/movie/day");
console.log(data)
    if(loading) return <Shimmer/>

  return <div className="hero">
    <div className="upcoming">
      <Carousel data={data} />
    </div>
  </div>
}
