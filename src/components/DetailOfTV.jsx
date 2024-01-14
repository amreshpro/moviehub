/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { IMAGE_BASE_URL } from '../constants';
import CastProfile from './CastProfile';
import VideoBox from './VideoBox';

// for month
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export default function DetailsOftv() {
    const { tvId } = useParams();

    const { data: tvDetails, loading: loadingTvData } = useFetch(
        `/tv/${tvId}`,
    );

    const { data: creditDetails, loading: loadingCreditData } = useFetch(
        `/tv/${tvId}/credits`,
    );
    const { data: tvVideos, loading: tvVideosLoading } = useFetch(
        `/tv/${tvId}/videos`,
    );
    console.log(tvDetails);
    console.log(creditDetails);
    console.log(tvVideos);
    if (loadingTvData || loadingCreditData || tvVideosLoading)
        return 'Loading....';
    const {
        poster_path,
        name,
        genres,
        overview,
        first_air_date,
        vote_average,
        number_of_episodes,
        number_of_seasons,
        tagline,
          
    } = tvDetails.data;

    const { cast: casts, crew: crews } = creditDetails.data;

  
    // date object
    const d = new Date(first_air_date);

    return (
        <div className="container mt-4 px-4 ">
            <div className="details flex justify-evenly gap-2 sm:flex-wrap w-full">
                <div className="tv-details-image sm:w-full">
                    {/* image-poster */}
                    <img
                        src={`${IMAGE_BASE_URL}/${poster_path}`}
                        alt="tv poster"
                        className="w-80 sm:w-full rounded-lg"
                    />
                </div>
                <div className="content w-1/2 sm:w-full">
                    <h1 className="text-2xl font-bold">
                        {name}-{d.getFullYear()}
                    </h1>
                    {/* tagline */}
                    <h2>{tagline}</h2>
                    {/* genres */}
                    <div className="mt-2 genres flex gap-2 flex-wrap">
                        {genres?.map((genre) => {
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
                    </div>

                    <p className="mt-2">{overview}</p>
                    {/* status */}
                    <div className="mt-2 status flex flex-col sm:flex-wrap gap-3 ">
                        <hr className="w-full h-1 bg-[#e50914]" />

                        {/* Episodes */}
                        <span className="flex gap-2 ">
                            <p className="">Total Episodes: </p>
                            <p className="text-gray-700">
                                {number_of_episodes}
                            </p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />

                        {/*  seasons */}
                        <span className="flex gap-2 ">
                            <p className="">Total Seasons: </p>
                            <p className="text-gray-700">{number_of_seasons}</p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />

                        {/* release date */}
                        <span className="flex gap-2 ">
                            <p className="">Release Date: </p>
                            <p className="text-gray-700">
                                {months[d.getMonth()]} {d.getDate()},{' '}
                                {d.getFullYear()}
                            </p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />

                     

                        {/* director */}
                        <span className="flex gap-2 ">
                            <p className="">Directors: </p>
                            <p className="text-gray-700">
                                {[
                                    ...new Set(
                                        crews
                                            ?.filter((crew) => {
                                                if (
                                                    crew?.known_for_department ==
                                                    'Directing'
                                                )
                                                    return crew;
                                            })
                                            .map((c) => c.name),
                                    ),
                                ]
                                    .map((name) => name)
                                    .slice(0, 5)
                                    .join(', ')
                                    ?? 'unknown'
                                    }
                            </p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />

                        {/* writer */}
                        <span className="flex gap-2 ">
                            <p className="">Writers: </p>
                            <p className="text-gray-700">
                                {
                                    [
                                    ...new Set(
                                        crews
                                            ?.filter((crew) => {
                                                if (
                                                    crew?.known_for_department ==
                                                    'Writing'
                                                )
                                                    return crew;
                                            })
                                            .map((c) => c.name),
                                    ),
                                ]
                                    .map((name) => name)
                                    .slice(0, 5)
                                    .join(', ')
                                    
                                    ?? 'unknown'
                                    }
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
                    {casts?.slice(0, 5).map((cast, index) => {
                        return <CastProfile key={cast.id} {...cast} />;
                    })}
                </div>
            </div>

            {/* tv releated videos */}
            <div className="related-videos mt-4">
                <h1 className="text-2xl mb-4 px-2 ">Series Related Videos</h1>
                <div className="official-videos flex justify-center sm:gap-2 gap-4 flex-wrap">
                    {tvVideos?.data?.results.slice(0, 5).map((video, i) => {
                        const videoKey = video.key;
                        return (
                            <VideoBox key={i} {...video} videoKey={videoKey} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
