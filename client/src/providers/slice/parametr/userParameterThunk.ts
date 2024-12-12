import { createAsyncThunk } from '@reduxjs/toolkit';
import userParameterService from '../../../services/userParameter.service';
import { type userPType } from '../../../schemas/userP.schema';

export const getAllParametr = createAsyncThunk('userP/getAllParamentr', async () =>
  userParameterService.getAll(),
);

export const getMyParameters = createAsyncThunk('userP/getMyParameters', async () =>
  userParameterService.getParameterMyUserId(),
);

export const addParams = createAsyncThunk('userP/addParams', (formData: FormData) =>
  userParameterService.addParams(formData as unknown as userPType),
);

export const updateParams = createAsyncThunk(
  'userP/updateParams',
  async ({ id, formData }: { id: number; formData: FormData }) => {
    try {
      const data = formData;
      // console.log(data.get('img'))
      return await userParameterService.updateParams(id, data as unknown as userPType);
    } catch (error) {
      console.log('Error updating parameters:', error);
      throw error; // Пробрасываем ошибку для обработки в Redux
    }
  },
);
