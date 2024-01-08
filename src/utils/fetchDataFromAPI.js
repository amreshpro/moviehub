import axios from 'axios';
import { BASE_URL, TMDB_TOKEN } from '../constants';

export default async function fetchDataFromAPI(url) {
    const options = {
        method: 'GET',
        url: `${BASE_URL}${url}`,
        params: {
            include_adult: 'false',
            include_video: 'false',
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc',
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + TMDB_TOKEN,
        },
    };

    return await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}
