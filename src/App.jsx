import { useEffect, useState } from 'react';
import fetchDataFromAPI from './utils/fetchDataFromAPI';

export default function App() {
    const [movieData, setMovieData] = useState(false);

    useEffect(() => {
        const data = fetchDataFromAPI('/discover/movie');
        setMovieData(data);
    }, []);
    console.log(movieData);

    return (
        <div className="bg-slate-900 text-white">
            <h1>Hello </h1>
        </div>
    );
}
