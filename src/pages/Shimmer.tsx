import React from "react";

export default function Shimmer() {
  return <div className="flex flex-wrap gap-4 ">
{
    Array(10)?.map((_,i:number)=>{
        return <MovieSkelton key={"shimmerskelton"+i}/>
    })
}
  </div>;
}

const MovieSkelton = () => {
  return (
    <div className="sticky w-60   overflow-hidden">
      <div className="h-72 w-full bg-gray-400 rounded-lg"></div>
      <div className="content bg-gray-300 w-full rounded-lg px-2 py-2"></div>
    </div>
  );
};
