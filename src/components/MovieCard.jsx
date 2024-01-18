/* eslint-disable react/prop-types */
import genres from '../constants/genres';
import Rating from './Rating';
const IMAGE_BASE_URL = import.meta.env.IMAGE_BASE_URL 

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

export default function MovieCard(props) {
    const {
        original_title,
        title,
        poster_path,
        release_date,
        first_air_date,
        genre_ids,
        name,
        vote_average,
    } = props;

    const d = new Date(release_date ?? first_air_date);
    return (
        <div className="sticky w-60  bg-[#e50914] text-white rounded-xl overflow-hidden">
            <img
                src={`${IMAGE_BASE_URL}/${poster_path}`}
                alt="Movie Poster"
                className=" h-72 w-full"
            />
            <div className="content  px-2 py-2">
                <h1 className="font-bold ">
                    {original_title ?? title ?? name}
                </h1>
                <p className="text-gray-100">
                    {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}
                </p>

                <div className="rating absolute top-8 ">
                    <Rating vote_average={vote_average} />
                </div>

                <div className="genres-list absolute top-8 right-2">
                    {genre_ids?.map((_, i) => {
                        if (genre_ids[i] === genres[i].id)
                            return (
                                <h2
                                    className=" w-fit m-1 text-sm bg-black bg-opacity-50 text-white rounded-xl px-1 py-0.5"
                                    key={i}
                                >
                                    {genres[i]?.name}
                                </h2>
                            );
                    })}
                </div>
            </div>
        </div>
    );
}
