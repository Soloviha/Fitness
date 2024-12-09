/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ChatType } from '../../../schemas/chat.schema';
import { sendMessage } from './ChatThunk';

type ChatState = {
  messages: ChatType[];
  error: string | null;
};

const initialState: ChatState = {
  messages: [],
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    addMessage: (state, action: PayloadAction<ChatType>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.fulfilled, (state, action) => {
        // Здесь мы можем добавить логику для обработки успешной отправки сообщения, если нужно
        // Например, можно добавить ответ от бота
        const botResponse = action.payload; // Ответ от бота
        const newMessage: ChatType = { id: Date.now(), text: botResponse };
        state.messages.push(newMessage); // Добавляем ответ от бота в список сообщений
      })
      .addCase(sendMessage.rejected, (state) => {
        state.error = 'Ошибка отправки сообщения';
      });
  },
});

export const { setError, clearError, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
