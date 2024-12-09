import { createAsyncThunk } from '@reduxjs/toolkit';
import userParameterService from '../../../services/userParameter.service';
import type { userPType } from '../../../schemas/userP.schema';


export const getAllParametr = createAsyncThunk('userP/getAllParamentr', async () => userParameterService.getAll());

// export const addParams = createAsyncThunk(
//   'userP/addParams',
//   async (data) => userParameterService.addParams(data),
// );

export const addParams = createAsyncThunk('userP/addParams', (formData: FormData) =>
  //   const data = Object.fromEntries(formData);
  //   const parsedData = userPSchema.parse(data);
  userParameterService.addParams(formData as userPType),
);

export const updateParams = createAsyncThunk('userP/updateParams', async (userId, data) =>
  userParameterService.updateParams(userId, data),
);
