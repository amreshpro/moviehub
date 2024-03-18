"use client";
import MovieCard from "@/pages/MovieCard";
import Shimmer from "@/pages/Shimmer";
import { useFetch } from "@/utils/useFetch";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Movies() {
  const { data, loading, error, page, setPage, totalPages } =
    useFetch("/discover/tv");

 
  if (loading) return <Shimmer/>;
  if (error) return "Error: " + error;
  return (
    <div>
     <h1 className="mx-2 px-2 text-lg mt-5"> TV Shows</h1>
      <div className="cards flex flex-wrap gap-4 px-2 justify-center my-4 ">
        {data?.map((tv: any) => {
          return (
            <Link href={`/tv/${tv?.id}`} key={tv?.id}>
              <MovieCard {...tv} />
            </Link>
          );
        })}
      </div>
      <div className="pagination mt-4 flex gap-2 justify-center text-3xl">
        <button
          onClick={() =>
            setPage((prev: number) => {
              return prev > 1 ? prev - 1 : prev;
            })
          }
          className="bg-[#0f101a] px-4 py-0.5"
        >
          <IoIosArrowBack />
        </button>
        <p className="bg-[#0f101a] px-4 py-0.5">{page}</p>
        <button
          onClick={() =>
            setPage((prev: number) => {
              return totalPages > prev ? prev + 1 : prev;
            })
          }
          className="bg-[#0f101a] px-4 py-0.5"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
