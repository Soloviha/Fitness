import type { AxiosInstance } from 'axios';
import axiosInstance from '../api/axiosInstance';
import { chatSchema, serverResponseSchema } from '../schemas/chat.schema';

class ChatService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Валидация сообщения перед отправкой
      chatSchema.parse({ userMessage: message });

      const response = await this.client.post('/chats', { userMessage: message });

      // Валидация ответа от сервера
      const parsedResponse = serverResponseSchema.parse(response.data);

      // Проверка наличия ошибки в ответе
      if (parsedResponse.error) {
        throw new Error(parsedResponse.error);
      }

      // Возвращаем ответ чат-бота
      return parsedResponse.response ?? '';
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
      throw new Error('Произошла ошибка при отправке сообщения');
    }
  }
}

export default new ChatService(axiosInstance);

