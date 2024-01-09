import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, TMDB_TOKEN } from "../constants";
 
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");



 
  useEffect(() => {
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
    axios.request(options)
      .then((data) => {
        seterror(data.error)
        setdata(data)
        setloading(false)
    })
  }, [url]);
 
  return { data, loading, error };
};
 
export default useFetch;