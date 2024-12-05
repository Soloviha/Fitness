import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import { typeSchema, TypeType } from '../schemas/type.schema';

class TypeService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async getAll(): Promise<TypeType[]> {
    try {
      const response = await this.client.get('/typeOfWorkots');
      return typeSchema.array().parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка полученияя'));
    }
  }
}

export default new TypeService(axiosInstance);
