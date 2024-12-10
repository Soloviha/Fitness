import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import { userPSchema, type userPType } from '../schemas/userP.schema';

class UserParameterService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async getAll(): Promise<userPType> {
    try {
      const response = await this.client.get('/userP');
      return userPSchema.parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка получения параметров'));
    }
  }


  async addParams(data: { userId: number; secondName: string | null; dateOfBirth: string | null; gender: string | null; weight: number | null; height: number | null }): Promise<userPType> {
    try {
      const response = await this.client.post('/userP', data);
      return userPSchema.parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка добавления параметров пользователя'));
    }
  }

  async updateParams(userId: string, data: { secondName?: string | null; dateOfBirth?: string | null; gender?: string | null; weight?: number | null; height?: number | null }): Promise<userPType> {
    try {
      const response = await this.client.put(`/userP${userId}`, data);
      return userPSchema.parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка обновления параметров пользователя'));
    }
  }
}

export default new UserParameterService(axiosInstance);
