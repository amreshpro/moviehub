import React from "react"

const TVId = ({params}:{params:{tvId:string}}) => {

    const {tvId} = params
    return (
    <div>TVId: {tvId}</div>
  )
}
export default TVId