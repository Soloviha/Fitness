import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/auth.service";
import { loginFormSchema, signupFormSchema } from "../../../schemas/auth.schema";


export const loginThunk = createAsyncThunk('auth/login', (formData: FormData) => {
  const data = Object.fromEntries(formData);
  return authService.login(loginFormSchema.parse(data));
});

export const signupThunk = createAsyncThunk('auth/signup', (formData: FormData) => {
  const data = Object.fromEntries(formData);
  return authService.signup(signupFormSchema.parse(data));
});

export const logoutThunk = createAsyncThunk('/auth/logout', () => authService.logout());

export const refreshThunk = createAsyncThunk('auth/refresh', () => authService.refresh());
