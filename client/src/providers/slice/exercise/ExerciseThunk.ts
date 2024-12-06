import { createAsyncThunk } from '@reduxjs/toolkit';
import exerciseService from '../../../services/exercise.service';


export const getAllExercises = createAsyncThunk('exercise/getAllExercises', () => exerciseService.getAllExercises());