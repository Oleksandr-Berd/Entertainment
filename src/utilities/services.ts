import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://common-server-ldx7.onrender.com/api/entertainment",
});

export const fetchAllMovies = async (): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.get<any>(`/movies`);

    return response;
  } catch (error: any) {
    return error;
  }
};

export const fetchTrending = async (): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.get<any>(`/movies/trending`);

    return response;
  } catch (error: any) {
    return error;
  }
};