import axios from 'axios';


// env
const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

export default async function fetchDataFromApi(url, page = 1) {
    try {
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
        return await axios.request(options).then((data) => {
            console.log(data);
            return data;
        });
    } catch (error) {
        console.log(error);
    }
}
