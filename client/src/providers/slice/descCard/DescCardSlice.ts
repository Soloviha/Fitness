/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DescCardSliceType } from '../../../schemas/descCard.schema';
import { getAllDescCard } from './DescCardTHunk';

const initialState: DescCardSliceType = {
  descCard: [],
  error: null,
};

export const descCardSlice = createSlice({
  name: 'descCard',
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
    builder.addCase(getAllDescCard.fulfilled, (state, action) => {
      state.descCard = action.payload;
    });
    builder.addCase(getAllDescCard.rejected, (state) => {
      state.error = 'Ошибка получения';
    });
  },
});

export const { setError, clearError } = descCardSlice.actions;

export default descCardSlice.reducer;
