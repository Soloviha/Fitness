import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import typeReducer from '../slice/type/TypeSlice'
import workoutReducer from '../slice/workout/WorkoutSlice'
import exerciseReducer from '../slice/exercise/ExerciseSlice'
import articleReducer from '../slice/article/ArticleSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeReducer,
    workout: workoutReducer,
    exercise: exerciseReducer,
    article: articleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
