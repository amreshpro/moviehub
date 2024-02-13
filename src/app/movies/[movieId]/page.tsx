"use client"
import fetchDataFromApi from "@/utils/fetchDataFromApi"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function DetailsOfTV() {
const router = useParams();
const [loading, setLoading] = useState(false);
const [tvDetails, setTvDetails] = useState([])

console.log(router);


useEffect(()=>{
    setLoading(true)
    fetchDataFromApi(`/movie/${router?.movieId}`).then((data)=>{
        setTvDetails(data)
        console.log(data)
        setLoading(false)
    })

},[router?.movieId])

console.log({...tvDetails})

if(loading) return 'Loading...'
  return (
    <div>page</div>
  )
}



