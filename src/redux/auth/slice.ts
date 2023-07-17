import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./operations";

interface User {
  name: string | null;
  email: string | null;
}

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}



const authSlice = createSlice({
  name: "auth",
  initialState: {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action: PayloadAction<any>) => {
        
      })
        .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
          const { name, email } = action.payload;
          state.user = {name:name, email:email };

      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        return state;
      })

      .addCase(login.pending, (state, action: PayloadAction<any>) => {
        return state;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        return state;
      })

      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
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
