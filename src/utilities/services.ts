import axios from "axios";


const instance = axios.create({
  baseURL: "https://common-server-ldx7.onrender.com/api/entertainment",
});

export const fetchAllMovies = async () => {
  try {
    const response = await instance.get(`/movies`);

    return response;
  } catch (error: any) {
    return error;
  }
};

export const fetchTrending = async () => {
  try {
    const response = await instance.get(`/movies/trending`);

    return response;
  } catch (error: any) {
    return error;
  }
};