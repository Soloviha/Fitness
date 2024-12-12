import { createAsyncThunk } from '@reduxjs/toolkit';
import userParameterService from '../../../services/userParameter.service';
import { userPSchema, type userPType } from '../../../schemas/userP.schema';

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
      
      const data = Object.fromEntries(formData);

      // Обработка изображения
      if (data.img instanceof File) {
        data.img = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(data.img);
        });
      }

      console.log('Sending update request with data:', data);

      return await userParameterService.updateParams(id, data as unknown as userPType);
    } catch (error) {
      console.log('Error updating parameters:', error);
      throw error; // Пробрасываем ошибку для обработки в Redux
    }
  }
);

