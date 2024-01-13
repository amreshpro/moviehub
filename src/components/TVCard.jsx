/* eslint-disable react/prop-types */
import { IMAGE_BASE_URL } from '../constants';
import {TVGenres} from '../constants/genres';

export default function TVCard(props) {
    const { original_title, title, poster_path, genre_ids,name } = props;

    return (
        <div className="sticky w-60  bg-[#e50914] text-white rounded-xl overflow-hidden">
            <img
                src={`${IMAGE_BASE_URL}/${poster_path}`}
                alt="Movie Poster"
                className=" h-72 w-full"
            />
            <div className="content  px-2 py-2">
                <h1 className="font-bold ">{original_title?? title??name}</h1>
                <div className="genres-list absolute top-8 right-2">
                    {genre_ids?.map((_, i) => {
                        if (genre_ids[i] === TVGenres[i].id)
                            return (
                                <h2
                                    className=" w-fit m-1 text-sm bg-black bg-opacity-50 text-white rounded-xl px-1 py-0.5"
                                    key={i}
                                >
                                    {TVGenres[i]?.name}
                                </h2>
                            );
                    })}
                </div>
            </div>
        </div>
    );
}
