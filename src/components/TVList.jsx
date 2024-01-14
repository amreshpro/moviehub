import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import MovieCard from './MovieCard';

export default function TVList() {
    const { data: tvDetails, loading: tvLoading } = useFetch('/discover/tv');
    if (tvLoading) return 'Loading....';
    console.log(tvDetails);
    return (
        <div>
            <div className=" my-4 filter flex gap-2 justify-between px-4 sm:px-2">
                <h1 className="text-2xl">Explore TV Shows</h1>
                <div className="filer-item flex gap-3 flex-wrap">
                    <button>Filer-1</button>
                    <button>Filer-2</button>
                </div>
            </div>
            <div className="tv-container flex justify-center gap-6 flex-wrap">
                {tvDetails?.data?.results?.map((tv) => {
                    console.log(tv);
                    return (
                        <Link to={`/tv/${tv.id}`} key={tv.id}>
                            <MovieCard {...tv} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
