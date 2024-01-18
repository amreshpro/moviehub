import axios from 'axios';
import { BASE_URL, TMDB_TOKEN } from '../constants/socialLinks';

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
