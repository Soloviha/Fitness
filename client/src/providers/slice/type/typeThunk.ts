import { createAsyncThunk } from '@reduxjs/toolkit';
import typeService from '../../../services/type.service';


export const getAll = createAsyncThunk('type/getAll', () => typeService.getAll());


