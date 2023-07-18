import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser, bookmarked } from './operations';

interface State {
    user: User,
    token: null | string,
    error: any,
    isLoggedIn: boolean,
    isRefreshing: boolean
}
interface User {
  name: null | string;
    email: null | string;
    avatarUrl: null | string;
  bookmarked: string[];
}

const initialState: State = {
  user: { name: null, email: null, bookmarked: [], avatarUrl: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

 ;
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action: PayloadAction<any>) => state)
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        return state;
      })

      .addCase(login.pending, (state, action: PayloadAction<any>) => {
        return state;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        const { name, email, token, avatarUrl, bookmarked } = action.payload;
        state.token = token;
        state.user = {
          name: name,
          email: email,
          avatarUrl: avatarUrl,
          bookmarked: bookmarked,
        };
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          avatarUrl: null,
          bookmarked: [],
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
        .addCase(refreshUser.fulfilled, (state, action: PayloadAction<any>) => {
          
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
        .addCase(bookmarked.fulfilled, (state, action: PayloadAction<any>) => {
            
        const { title } = action.payload;
            const { bookmarked } = state.user;            
        bookmarked.push(title);
      });
  },
});

export const authReducer = authSlice.reducer;
