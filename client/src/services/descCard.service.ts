import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import type { DescCardType } from '../schemas/descCard.schema';
import { descCardSchema } from '../schemas/descCard.schema';

class DescCardService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async getAllDescCard(): Promise<DescCardType[]> {
    try {
      const response = await this.client.get('/descCard');
      return descCardSchema.array().parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка получения'));
    }
  }
}

export default new DescCardService(axiosInstance);
