/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { WorkoutSliceType } from '../../../schemas/workout.shema';
import { getAllWorkouts } from './WorkoutThunk';

const initialState: WorkoutSliceType = {
  workouts: [],
  error: null,
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllWorkouts.fulfilled, (state, action) => {
      state.workouts = action.payload;
    });
    builder.addCase(getAllWorkouts.rejected, (state) => {
      state.error = 'Ошибка получения';
    });
  },
});

export const { setError, clearError } = workoutSlice.actions;

export default workoutSlice.reducer;
