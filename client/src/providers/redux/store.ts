import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import typeReducer from '../slice/type/TypeSlice'
import workoutReducer from '../slice/workout/WorkoutSlice'
import userPReducer from '../slice/parametr/userParameterSlice'
import exerciseReducer from '../slice/exercise/ExerciseSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeReducer,
    workout: workoutReducer,
    userP: userPReducer,
    exercise: exerciseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
