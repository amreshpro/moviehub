import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import MovieCard from './MovieCard';

export default function MovieList() {
    const { data, loading } = useFetch('/discover/movie');
    if (loading) return 'Loading....';
    console.log(data)
    return (
        <div>
            <div className="filter">
                <h1 className="text-2xl">Explore Movies</h1>
                <div className="filer-item flex gap-3 flex-wrap">
                    <button>Filer-1</button>
                    <button>Filer-2</button>
                </div>
            </div>
            <div className="movie-container flex justify-center gap-6 flex-wrap">
                {data?.data?.results?.map((movie) => {
                    return (<Link to={`/movie/${movie.id}`} key={movie.id}> 
                     <MovieCard {...movie} />
                    </Link>)
                })}
            </div>
        </div>
    );
}
