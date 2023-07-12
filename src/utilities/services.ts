import axios from "axios";


const instance = axios.create({
  baseURL: "https://common-server-ldx7.onrender.com",
});

export const fetchAllMovies = async () => {
  try {
    const response = await instance.get(`/api/entertainment/movies`);

    return response;
  } catch (error: any) {
    return error;
  }
};