/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ArticleSliceType } from '../../../schemas/article.schema';
import { createArticle, getAllArticle } from './ArticleThunk';

const initialState: ArticleSliceType = {
  article: [],
  error: null,
};

export const articleSlice = createSlice({
  name: 'article',
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
    builder.addCase(getAllArticle.fulfilled, (state, action) => {
      state.article = action.payload;
    });
    builder.addCase(getAllArticle.rejected, (state) => {
      state.error = 'Ошибка получения';
    });
    builder.addCase(createArticle.fulfilled, (state, action) => {
      state.article.push(action.payload);
    });
    builder.addCase(createArticle.rejected, (state) => {
      state.error = 'Ошибка добавления';
    });
  },
});

export const { setError, clearError } = articleSlice.actions;

export default articleSlice.reducer;
