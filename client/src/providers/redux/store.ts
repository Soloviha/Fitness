import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import typeReducer from '../slice/type/TypeSlice'
import workoutReducer from '../slice/workout/WorkoutSlice'
import userPReducer from '../slice/parametr/userParameterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeReducer,
    workout: workoutReducer,
    userP: userPReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
