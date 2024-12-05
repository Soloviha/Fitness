/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TypeSliceType } from '../../../schemas/type.schema';
import { getAll } from './typeThunk';


const initialState: TypeSliceType = {
  types: [],
  error: null,
};

export const typeSlice = createSlice({
  name: 'type',
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
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.types = action.payload;
    });
    builder.addCase(getAll.rejected, (state) => {
      state.error = 'Ошибка получения';
    });
  },
});

export const { setError, clearError} = typeSlice.actions;

export default typeSlice.reducer;
