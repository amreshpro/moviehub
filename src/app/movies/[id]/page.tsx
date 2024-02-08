"use client"
import fetchDataFromApi from "@/utils/fetchDataFromApi"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function DetailsOfMovies() {
const router = useParams();
const [loading, setLoading] = useState(false);
const [movieDetails, setMovieDetails] = useState([])

console.log(router);


useEffect(()=>{
    setLoading(true)
    fetchDataFromApi(`/movie/${router?.id}`).then((data)=>{
        setMovieDetails(data)
        console.log(data)
        setLoading(false)
    })

},[router?.id])

console.log({...movieDetails})

if(loading) return 'Loading...'
  return (
    <div>page</div>
  )
}