import { createAsyncThunk } from '@reduxjs/toolkit';
import articleService from '../../../services/article.service';
import { articleFormSchema } from '../../../schemas/article.schema';

export const getAllArticle = createAsyncThunk('article/getAllArticle', () =>
  articleService.getAllArticle(),
);

export const createArticle = createAsyncThunk('article/createArticle', (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const parsedData = articleFormSchema.parse(data);
  return articleService.createArticle(parsedData);
});
