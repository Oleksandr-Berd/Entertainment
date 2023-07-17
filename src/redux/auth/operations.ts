import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://common-server-ldx7.onrender.com/api/entertainment";

axios.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjU1MmY5ODFhOWNlZDNmYzk3MzgwOSIsImlhdCI6MTY4OTYwOTA3MywiZXhwIjoxNjg5Njk1NDczfQ.N0bNyxSdMdUyuZvlpbOkY3NVbbAmNVoX4yZFZHjBHtw";

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

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser:any = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state:any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get("auth/current");
      return res.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
