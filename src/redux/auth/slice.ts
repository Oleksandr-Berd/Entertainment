import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null, bookmarked:null, avatarUrl: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action: PayloadAction<any>) => {})
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
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
        return state;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null, avatarUrl: null, bookmarked: null };
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
      });
  },
});

export const authReducer = authSlice.reducer;
