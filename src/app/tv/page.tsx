"use client";
import MovieCard from "@/pages/MovieCard";
import { useFetch } from "@/utils/useFetch";
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";

export default function Movies() {
  const { data, loading, error ,page,setPage,totalPages} = useFetch("/discover/tv");


  console.log(loading);
  console.log(error);
  if (loading) return "Loading......";
  if (error) return "Error: " + error;
  return (
    <div>
      TV Shows

      <div className="cards flex flex-wrap gap-4 px-2 justify-center my-4 ">

        {
            data?.map((tv: any) => {
              return (
                <MovieCard key={tv?.id} {...tv}  />
              );
            })
        }
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
