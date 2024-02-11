"use client";
// import Carousel from "@/pages/Carousel";
import MovieCard from "@/pages/MovieCard";
import { useFetch } from "@/utils/useFetch";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Movies() {
  const { data, loading, error, page, setPage, totalPages } =
    useFetch("/discover/movie");

  console.log("totalpages:" + totalPages);
  if (loading) return "Loading......";
  if (error) return "Error: " + error;
  return (
    <div>
      Movies
      <div className="cards flex flex-wrap gap-4 px-2 justify-center my-4 ">
        {data?.map((movie: any) => {
          return (
            <Link href={`/movies/${movie?.id}`} key={movie.id} >
              <MovieCard {...movie} />
            </Link>
          )
        })}
      </div>
      <div className="pagination mt-4 flex gap-2 justify-center text-3xl">
        <button
          onClick={() =>
            setPage((prev: number) => {
              return prev > 1 ? prev - 1 : prev;
            })
          }
          className="bg-[#27f4a5] text-white px-4 py-0.5"
        >
          <IoIosArrowBack />
        </button>
        <p className="bg-[#27f4a5] text-white px-4 py-0.5">{page}</p>
        <button
          onClick={() =>
            setPage((prev: number) => {
              return totalPages > prev ? prev + 1 : prev;
            })
          }
          className="bg-[#27f4a5] text-white  px-4 py-0.5"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
