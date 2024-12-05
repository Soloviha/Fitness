import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import typeReducer from '../slice/type/TypeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
