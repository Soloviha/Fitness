import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import type { ArticleFormType, ArticleType } from '../schemas/article.schema';
import { articleSchema } from '../schemas/article.schema';

class ArticleService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async getAllArticle(): Promise<ArticleType[]> {
    try {
      const response = await this.client.get('/article');
      return articleSchema.array().parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Ошибка получения'));
    }
  }

  async createArticle(formData: ArticleFormType): Promise<ArticleType> {
    try {
      const response = await this.client.post('/article', formData);
      return articleSchema.parse(response.data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) return Promise.reject(error);
      return Promise.reject(new Error('Странная ошбика'));
    }
  }
}

export default new ArticleService(axiosInstance);
