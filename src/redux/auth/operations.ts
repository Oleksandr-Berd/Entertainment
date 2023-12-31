import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAuthHeader } from "hooks/useAuthHeader";


export interface IUser {
    name?: string,
    email?: string,
    password?:string,
}

axios.defaults.baseURL =
  "https://common-server-ldx7.onrender.com/api/entertainment";


const setAuthHeader = (token: string | null) => {
    
 axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};




export const register = createAsyncThunk(
  "auth/register",
    async (credentials: IUser, thunkAPI) => {
     
    try {
        const res = await axios.post("/auth/register", credentials);
 const { authHeader } = useAuthHeader(res.data.token);
        
        setAuthHeader(authHeader);
        
      return res.data;
    } catch (error) {
     if (axios.isAxiosError(error)) {
       return thunkAPI.rejectWithValue(error.response?.data);
     } else {
       return thunkAPI.rejectWithValue("An error occurred.");
     }
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
        
clearAuthHeader()

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

export const changeBookmarked: any = createAsyncThunk(
    "auth/bookmarked",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.patch("auth/bookmarked", credentials);
        
            return res.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

  export const addAvatar: any = createAsyncThunk(
    "auth/avatars",
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.patch("auth/avatars", credentials);

        return res.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

