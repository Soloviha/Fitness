import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import { exerciseSchema, type ExerciseType } from '../schemas/exercise.schema';

class ExerciseService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async getAllExercises(): Promise<ExerciseType[]> {
    try {
      const response = await this.client.get('/exercises');
      return exerciseSchema.array().parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка получения'));
    }
  }
}

export default new ExerciseService(axiosInstance);