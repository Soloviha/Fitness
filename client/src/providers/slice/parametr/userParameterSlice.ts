/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { addParams, updateParams, getAllParametr } from './userParameterThunk';
import type { UserPSliceType } from '../../../schemas/userP.schema';

const initialState: UserPSliceType = {
  userP: {
    weight: null,
    height: null,
    gender: null,
    img: null,
    dateOfBirth: null,
    BMI: null,
    userId: null,
    secondName: null,
  },
  error: null,
};

export const userPSlice = createSlice({
  name: 'userP',
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
    builder.addCase(getAllParametr.fulfilled, (state, action) => {
      state.userP = action.payload;
    });
    builder.addCase(getAllParametr.rejected, (state) => {
      state.error = 'Ошибка получения параметров';
    });

    builder.addCase(addParams.fulfilled, (state, action) => {
      state.userP = action.payload;
      // state.userPOne = action.payliad
    });
    builder.addCase(addParams.rejected, (state) => {
      state.error = 'Ошибка добавления параметров';
    });

    builder.addCase(updateParams.fulfilled, (state, action) => {
      const index = state.userP.findIndex((param) => param.userId === action.payload.userId);
      if (index !== -1) {
        state.userP[index] = action.payload;
      }
    });
    builder.addCase(updateParams.rejected, (state) => {
      state.error = 'Ошибка обновления параметров';
    });
  },
});

export const { setError, clearError } = userPSlice.actions;

export default userPSlice.reducer;
