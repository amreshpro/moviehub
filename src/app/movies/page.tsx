"use client";
import {useFetch} from "@/utils/useFetch"

export default function Movies() {
    const{data,loading,error}=useFetch("/discover/movie")
    console.log(data)
    console.log(loading)
    console.log(error)
    if(loading) return 'Loading......';
    if(error) return 'Error: '+error
    return (
    <div>Movies</div>
  )
}