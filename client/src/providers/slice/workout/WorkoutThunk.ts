import { createAsyncThunk } from '@reduxjs/toolkit';
import workoutService from '../../../services/workout.service';


export const getAllWorkouts = createAsyncThunk('workout/getAllWorkout', () => workoutService.getAllWorkout());