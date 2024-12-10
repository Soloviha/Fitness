import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import { workoutSchema, type WorkoutType } from '../schemas/workout.shema';

class WorkoutService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async getAllWorkout(): Promise<WorkoutType[]> {
    try {
      const response = await this.client.get('/workouts');
      return workoutSchema.array().parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка получения'));
    }
  }
}

export default new WorkoutService(axiosInstance);
