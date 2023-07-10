import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:5002/api/entertainment/movies/",
});

export const fetchAllMovies = async () => {
  try {
    const response = await instance.get(`/`);

    return response;
  } catch (error: any) {
    return error;
  }
};