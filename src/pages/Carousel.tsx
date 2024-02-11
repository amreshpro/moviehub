"use client"
import Link from "next/link"
import { useState } from "react"
import MovieCard from "./MovieCard"


type MovieCardPropType = {
    id:number,
    adult: boolean;
    original_title: string;
    title: string;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    genre_ids: number[];
    name: string;
    vote_average: number;
  };

type CarouselPropType ={
    data:MovieCardPropType[],
}

export default function Carousel({data}:CarouselPropType) {
 const [currentSlide, setCurrentSlide] = useState(0)
    return (
    <div className="container flex gap-4 overflow-x-scroll snap-mandatory snap-x px-4  ">

{
    data?.map((item)=>{
        return(
            <Link href={`/movies/${item?.id}`} key={item?.id} >
              <MovieCard {...item} />
            </Link> 
        )
    })
}


    </div>
  )
}