import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/auth/authSlice';
import typeReducer from '../slice/type/TypeSlice'
import workoutReducer from '../slice/workout/WorkoutSlice'
import userPReducer from '../slice/parametr/userParameterSlice'
import exerciseReducer from '../slice/exercise/ExerciseSlice'
import chatReducer from '../slice/chat/ChatSlice'
import descCardReducer from '../slice/descCard/DescCardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    type: typeReducer,
    workout: workoutReducer,
    userP: userPReducer,
    exercise: exerciseReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
