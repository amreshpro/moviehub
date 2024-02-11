"use client"
import Carousel from "@/pages/Carousel";
import { useFetch } from "@/utils/useFetch";

export default function Hero() {
  const { data, loading, error, page, setPage, totalPages } =
    useFetch("/discover/movie");
console.log(data)
    if(loading) return 'Loading...'

  return <div className="hero">
    <div className="upcoming">
      <Carousel data={data} />
    </div>
  </div>
}
