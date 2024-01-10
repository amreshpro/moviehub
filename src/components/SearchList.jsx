import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import useFetch from '../utils/useFetch';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const SearchList = () => {
    const [searchText, setSearchText] = useState('money heist');
    // const [searchList, setSearchList] = useState([])

    const onSearchHandler = () => {
        console.log(searchText);
    };
    const {
        data: SearchData,
        loading: SearchDataLoading,
        error: SearchError,
    } = useFetch(`/search/multi?query=${searchText}`);
    console.log(SearchData);

    console.log(SearchError);
    return (
        <div className="search-container">
            <div className="search flex  justify-center  mt-8  ">
                <input
                    type="text"
                    placeholder="Search your movie..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="focus:outline-none focus:border-none border-none bg-red-50 text-black px-2 py-1 placeholder:text-gray-500"
                />
                <button
                    onClick={() => onSearchHandler()}
                    className="bg-[#e50914] text-white px-2 "
                >
                    <IoSearchOutline />
                </button>
            </div>

            {SearchDataLoading ? (
                'Loading....'
            ) : (
                <div className="sear-list-container mt-6  flex justify-center gap-4 flex-wrap">
                    {SearchData?.data?.results?.map((movie) => {
                        return (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <MovieCard {...movie} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchList;
