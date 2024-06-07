import React from "react"

const MovieByID = ({params}:{params:{movieId:string}}) => {
  const {movieId} = params
    return (
    <div>MovieByID  :{movieId}</div>
  )
}
export default MovieByID