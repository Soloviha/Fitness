import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ChatType } from '../../../schemas/chat.schema';
import { chatSchema, serverResponseSchema } from '../../../schemas/chat.schema';
import { z } from 'zod';
import chatService from '../../../services/chat.service';
import { addMessage, setError } from './ChatSlice';

// Получение всех сообщений
export const getChatMessages = createAsyncThunk('chat/getChatMessages', async () => {
  const messages = await chatService.getAllMessages();
  return messages; // Предполагается, что getAllMessages возвращает массив ChatType
});

// Отправка сообщения
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








// import { createAsyncThunk } from '@reduxjs/toolkit';
// import chatService from '../services/chatService';
// import { addMessage, setError } from './chatSlice';

// export const getChatMessages = createAsyncThunk('chat/getChatMessages', () => chatService.getAllMessages());

// export const sendMessage = createAsyncThunk(
//   'chat/sendMessage',
//   async (message: string, { dispatch }) => {
//     try {
//       // Validate the message using the provided schema
//       const validatedMessage = chatSchema.parse(message);
//       const botResponse = await chatService.sendMessage(validatedMessage);
//       const newMessage: ChatType = { id: Date.now(), text: validatedMessage };
//       dispatch(addMessage(newMessage));
//       return botResponse;
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         dispatch(setError(error.issues[0].message));
//       } else {
//         dispatch(setError('Произошла ошибка при отправке сообщения'));
//       }
//       throw error;
//     }
//   }
// );
