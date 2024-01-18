import axios from 'axios';
import { useEffect, useState } from 'react';


// env
const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN



const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `${BASE_URL}${url}`,
            params: {
                include_adult: 'true',
                include_video: 'true',
                language: 'en-US',
                page: `${page}`,
                sort_by: 'popularity.desc',
            },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + TMDB_TOKEN,
            },
        };
        axios.request(options).then((data) => {
            seterror(data.error);
            setdata(data);
            setloading(false);
        });
    }, [page, url]);

    return { data, loading, error, page, setPage };
};

export default useFetch;
