/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import useFetch from "../utils/useFetch"
import { IMAGE_BASE_URL } from "../constants"


export default function DetailsOfMovie() {
    const {movieId} = useParams()
    const {data,loading} = useFetch(`/movie/${movieId}`)
    console.log(data)
    if(loading) return "Loading...."
    const {poster_path,title,genres,overview,vote_average} = data.data
  return (
    <div className="flex gap-4">

    <div className="content">

    </div>
    <div className="movie-details-image">
<img src={`${IMAGE_BASE_URL}/${poster_path}`} alt=""/>
    </div>
    

    </div>
  )
}