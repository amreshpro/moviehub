"use client";
import CastProfile from "@/pages/CastProfile";
import VideoBox from "@/pages/VideoBox";
import fetchDataFromApi from "@/utils/fetchDataFromApi";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

//types
type MoviePropTypes = {
  poster_path?: string;
  title?: string;
  genres?: string[];
  overview?: string;
  vote_average?: number;
  tagline?: string;
  release_date?: string;
  status?: string;
  runtime?: number;
};
type CastPropType = {
  character: string;
  name: string;
  profile_path: string;
};

type MovieDetailsType={
    movies:{},
    credits:{
        cast: [],
        crew: [],
    },
    videos:[]
}


export default function DetailsOfTV() {
  const router = useParams();
  const [loading, setLoading] = useState(false);
  const [allMovieDetails, setAlMovieDetails] = useState<MovieDetailsType>({
    movies:{},
    credits: {
      cast: [],
      crew: [],
    },
    videos: [],
  });

  console.log(router);

  useEffect(() => {
    setLoading(true);
    fetchDataFromApi(`/movie/${router?.movieId}`).then((data) => {
      setAlMovieDetails((prev) => {
        return { ...prev, movies: data.data };
      });
      setLoading(false);
    });
    fetchDataFromApi(`/movie/${router?.movieId}/credits`).then((data) => {
      setAlMovieDetails((prev) => {
        prev.credits.cast = data.data.cast;
        prev.credits.crew = data.data.crew;
        return prev;
      });
      setLoading(false);
    });
    fetchDataFromApi(`/movie/${router?.movieId}/videos`).then((data) => {
      setAlMovieDetails((prev) => {
        return { ...prev, videos: data.data.results };
      });
      setLoading(false);
    });
  }, [router?.movieId]);

  if (loading) return "Loading...";

  console.log(allMovieDetails);
  const {
    poster_path,
    title,
    genres,
    overview,
    vote_average,
    tagline,
    release_date,
    status,
    runtime,
  }:MoviePropTypes  = allMovieDetails.movies;
  return (
    <div className="container mt-4 px-4 ">
      <div className="details flex justify-evenly gap-2 sm:flex-wrap w-full">
        <div className="movie-details-image sm:w-full">
          {/* image-poster */}
          <img
            src={`${IMAGE_BASE_URL}/${poster_path}`}
            alt="movie poster"
            className="w-80 sm:w-full rounded-lg"
          />
        </div>
        <div className="content w-1/2 sm:w-full">
          <h1 className="text-2xl font-bold">{title}-</h1>
          {/* tagline */}
          <h2>{tagline}</h2>
          {/* genres */}
          {/* <div className="mt-2 genres flex gap-2 flex-wrap">
                {genres?.map((genre: { id: any; name: any; }) => {
                    const { id, name } = genre;
                    return (
                        <h3
                            className=" w-fit   bg-[#e50914]  text-white rounded-xl px-2 py-1"
                            key={id}
                        >
                            {name}
                        </h3>
                    );
                })}
            </div> */}

          <p className="mt-2">{overview}</p>
          {/* status */}
          <div className="mt-2 status flex flex-col sm:flex-wrap gap-3 ">
            <hr className="w-full h-1 bg-[#e50914]" />

            {/* status */}
            <span className="flex gap-2 ">
              <p className="">Status: </p>
              <p className="text-gray-700">{status}</p>
            </span>
            <hr className="w-full h-1 bg-[#e50914]" />
            {/* release date */}
            <span className="flex gap-2 ">
              <p className="">Release Date: </p>
              <p className="text-gray-700">
                {dayjs(release_date).format("MMM D, YYYY")?? 'unknown'}
              </p>
            </span>
            <hr className="w-full h-1 bg-[#e50914]" />

            {/* runtime */}
            <span className="flex gap-2 ">
              <p className="">Runtime: </p>
              <p className="text-gray-700">
                {Math.floor(runtime! / 60)}h {runtime! % 60}m
              </p>
            </span>
            <hr className="w-full h-1 bg-[#e50914]" />

            {/* director */}
            <span className="flex gap-2 ">
              <p className="">Directors: </p>
              <p className="text-gray-700">
                {allMovieDetails.credits.crew
                  .map(
                    (crew: {
                      known_for_department: string;
                      id: number;
                      name: string;
                    }) => {
                      if (crew?.known_for_department == "Directing")
                        return crew;
                    }
                  )
                  ?.map((c) => (c?.name ? c?.name : ""))
                  .slice(0, 5) ?? "unknown"}
              </p>
            </span>
            <hr className="w-full h-1 bg-[#e50914]" />

            {/* writer */}
            <span className="flex gap-2 ">
              <p className="">Writers: </p>
              <p className="text-gray-700">
                {allMovieDetails.credits.crew
                  .map(
                    (crew: {
                      known_for_department: string;
                      id: number;
                      name: string;
                    }) => {
                      if (crew?.known_for_department == "Writing") return crew;
                    }
                  )
                  ?.map((c) => (c?.name ? c?.name : ""))
                  .slice(0, 5) ?? 'unknown'}
              </p>
            </span>
            <hr className="w-full h-1 bg-[#e50914]" />
          </div>
        </div>
      </div>

      {/* cast */}
      <div className="casting mt-4 px-2  w-full">
        <h1 className="text-2xl mb-4 px-2 ">Star Cast</h1>
        <div className="cast flex sm:justify-center gap-8 sm:gap-4  flex-wrap">
          {allMovieDetails.credits?.cast
            ?.slice(0, 5)
            .map((cast: CastPropType, index: number) => {
              return <CastProfile key={"castkey" + index} {...cast} />;
            })}
        </div>
      </div>

      {/* movie releated videos */}
      <div className="related-videos mt-4">
        <h1 className="text-2xl mb-4 px-2 ">Movie Related Videos</h1>
        <div className="official-videos flex justify-center sm:gap-2 gap-4 flex-wrap">
          {allMovieDetails?.videos
            .slice(0, 5)
            .map((video: { key: string; name: string }, i: number) => {
                return (
                <VideoBox
                {...video}
                name={video.name}
                videoKey={video.key}
                  key={"videoboxmapkey" + i}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
