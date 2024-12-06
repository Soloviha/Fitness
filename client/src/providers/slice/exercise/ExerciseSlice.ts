/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ExerciseSliceType } from '../../../schemas/exercise.schema';
import { getAllExercises } from './ExerciseThunk';

const initialState: ExerciseSliceType = {
  exersices: [],
  error: null,
};

export const exerciseSlice = createSlice({
  name: 'exercise',
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
    builder.addCase(getAllExercises.fulfilled, (state, action) => {
      state.exersices = action.payload;
    });
    builder.addCase(getAllExercises.rejected, (state) => {
      state.error = 'Ошибка получения';
    });
  },
});

export const { setError, clearError } = exerciseSlice.actions;

export default exerciseSlice.reducer;
