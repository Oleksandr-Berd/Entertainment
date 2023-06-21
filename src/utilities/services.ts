import axios from "axios";
import { API_KEY, API_TOKEN } from "dataBase/API";


const instance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US1&sort_by=popularity.desc",
  headers: {
    common: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  },
});

export const fetchAllMovies = async () => {
  try {
    const response = await instance.get(`?api_key=${API_KEY}`);

    return response.data;
  } catch (error: any) {
    return error.response.data.message;
  }
};