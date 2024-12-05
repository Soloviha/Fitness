/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceType } from "../../../schemas/auth.schema";
import { loginThunk, logoutThunk, refreshThunk, signupThunk } from "./authThunks";


const initialState: AuthSliceType = {
  user: null,
  accessToken: null,
  error: null,
  isModalOpen:false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setModalOpen: (state) => {
      state.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.isModalOpen = false;
      state.error = null;
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(refreshThunk.rejected, (state) => {
      state.accessToken = null;
      state.user = null;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.error = action.error.message ?? 'Очень странная ошибка';
    });
    builder.addCase(signupThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(signupThunk.rejected, (state, action) => {
      state.error = action.error.message ?? 'Очень странная ошибка';
    });
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.error = action.error.message ?? 'Очень странная ошибка';
    });
  },
});

export const { setAccessToken , setModalClose, setModalOpen} = authSlice.actions;

export default authSlice.reducer;
