import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ChatType } from '../../../schemas/chat.schema';
import { chatSchema, serverResponseSchema } from '../../../schemas/chat.schema';
import { z } from 'zod';
import chatService from '../../../services/chat.service';
import { addMessage, setError } from './ChatSlice';

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message: string, { dispatch }) => {
    try {
      const validatedMessage = chatSchema.parse({ userMessage: message });
      const botResponse = await chatService.sendMessage(validatedMessage.userMessage);

      // Валидация ответа от сервера
      const parsedResponse = serverResponseSchema.parse({ response: botResponse });

      // Создание нового сообщения
      const newMessage: ChatType = { id: Date.now(), text: validatedMessage.userMessage };
      dispatch(addMessage(newMessage));

      return parsedResponse.response ?? '';
    } catch (error) {
      if (error instanceof z.ZodError) {
        dispatch(setError(error.issues[0].message));
      } else {
        dispatch(setError('Произошла ошибка при отправке сообщения'));
      }
      throw error;
    }
  },
);
