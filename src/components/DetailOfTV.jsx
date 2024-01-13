/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { IMAGE_BASE_URL } from '../constants';
import CastProfile from './CastProfile';

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

export default function DetailsOfTV() {
    const { tvId } = useParams();
    const { data: tvDetails, loading: loadingTvData } = useFetch(`/tv/${tvId}`);

    const { data: creditDetails, loading: loadingCreditData } = useFetch(
        `/tv/${tvId}/credits`,
    );

    console.log(tvDetails);
    console.log(creditDetails);
    if (loadingTvData || loadingCreditData) return 'Loading....';
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
    } = tvDetails.data;

    const { cast: casts } = creditDetails.data;

    // date object
    const d = new Date(release_date);
    return (
        <div className="container mt-4 px-4 ">
            <div className="details flex justify-evenly gap-2 sm:flex-wrap w-full">
                <div className="tv-details-image sm:w-full">
                    <img
                        src={`${IMAGE_BASE_URL}/${poster_path}`}
                        alt="tv poster"
                        className="w-80 sm:w-full rounded-lg"
                    />
                </div>
                <div className="content w-1/2 sm:w-full">
                    <h1 className="text-2xl font-bold">
                        {title}-{d.getFullYear()}
                    </h1>
                    <h2>{tagline}</h2>
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

                    <p>{overview}</p>
                    {/* status */}
                    <div className="mt-2 status flex flex-col sm:flex-wrap gap-3 ">
                        <hr className="w-full h-1 bg-[#e50914]" />

                        <span className="flex gap-2 ">
                            <p className="">Status: </p>
                            <p className="text-gray-700">{status}</p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />
                        <span className="flex gap-2 ">
                            <p className="">Release Date: </p>
                            <p className="text-gray-700">
                                {months[d.getMonth()]} {d.getDate()},{' '}
                                {d.getFullYear()}
                            </p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />

                        <span className="flex gap-2 ">
                            <p className="">Runtime: </p>
                            <p className="text-gray-700">
                                {Math.floor(runtime / 60)}h {runtime % 60}m
                            </p>
                        </span>
                        <hr className="w-full h-1 bg-[#e50914]" />
                    </div>
                </div>
            </div>

            {/* cast */}
            <div className="casting mt-4 px-2  w-full">
                <h1 className="text-2xl mb-4 px-2 ">Top Cast</h1>
                <div className="cast flex sm:justify-center gap-4  flex-wrap">
                    {casts?.map((cast, index) => {
                        if (index <= 4)
                            return <CastProfile key={cast.id} {...cast} />;
                    })}
                </div>
            </div>

            {/* <div className="official-videos">
<h1 className='text-2xl mb-4 px-2 '>Official Videos</h1>

<div className="official-videos flex gap-4 flex-wrap">
   
    </div>

</div> */}
        </div>
    );
}
