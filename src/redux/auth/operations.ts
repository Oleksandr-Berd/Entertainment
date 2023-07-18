import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://common-server-ldx7.onrender.com/api/entertainment";

axios.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjY0MTQ0NGJjN2Y1ZGY1ZGQ3ZjBmNCIsImlhdCI6MTY4OTY2NTg3MCwiZXhwIjoxNjg5NzUyMjcwfQ.2J_Ke5UKQA-7wQsn6n7BlMlSyp8BjEOuDMIlABTfreg";

const setAuthHeader = (token: any) => {
    
 axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};


export const register:any = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
        const res = await axios.post("/auth/register", credentials);

        
        setAuthHeader(res.data.token);
        
      return res.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const login:any = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
        const res = await axios.post("/auth/login", credentials);
        
        setAuthHeader(res.data.token)
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logout:any = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
      
    await axios.post("/auth/logout");
  } catch (error:any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshUser:any = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state:any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("auth/current");
      return res.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const bookmarked: any = createAsyncThunk(
  "auth/bookmarked",
  async (credentials, thunkAPI) => {
    try {
       const res = await axios.patch("auth/bookmarked", credentials);
        
        return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);