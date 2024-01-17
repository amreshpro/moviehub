import { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import fetchDataFromApi from '../utils/fetchDataFromApi';

const SearchList = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedData, setSearchedData] = useState([])
         const [isLoading, setIsLoading] = useState(false)

    const onSearchHandler = () => {
        console.log(searchText);
        
    };


useEffect(()=>{
    const getSearchedData =async()=>{
       setIsLoading(true)
   const res =    await fetchDataFromApi(`/search/multi?query=${searchText}`)
       setIsLoading(false)
       return res
    }
   setSearchedData(getSearchedData)
},[searchText])

console.log(searchedData)
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

            {isLoading ? (
                'Loading....'
            ) : (
                <div className="sear-list-container mt-6  flex justify-center gap-4 flex-wrap">
                    {searchedData?.data?.results?.map((movie) => {
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
