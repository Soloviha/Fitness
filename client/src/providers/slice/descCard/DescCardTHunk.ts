import { createAsyncThunk } from '@reduxjs/toolkit';
import descCardService from '../../../services/descCard.service';



export const getAllDescCard = createAsyncThunk('exercise/getAllDescCard', () => descCardService.getAllDescCard());