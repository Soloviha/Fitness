import { z } from 'zod';

// Схема для сообщения пользователя
export const chatSchema = z.object({
  userMessage: z.string().min(1, "Сообщение не может быть пустым"),
});

// Схема для ответа от сервера
export const serverResponseSchema = z.object({
  response: z.string().optional(), // Ответ чат-бота
  error: z.string().optional(), // Сообщение об ошибке
});

export const chatTypeSchema = z.object({
  id: z.number(),
  text: z.string(),
});

export const chatMessagesSchema = z.array(chatTypeSchema);

// Тип для сообщения чата
export type ChatType = {
  id: number;
  text: string;
};

// Тип для состояния сообщений
export type ChatSliceType = {
  messages: ChatType[];
};

// Тип для данных, отправляемых на сервер
export type UserMessageType = z.infer<typeof chatSchema>;

// Тип для ответа от сервера
export type ServerResponseType = z.infer<typeof serverResponseSchema>;






// import { z } from 'zod';

// export const chatSchema = z.string().min(1, "Сообщение не может быть пустым");

// export type ChatType = {
//     id: number;
//     text: string;
//   }
  
//   export type ChatSliceType = {
//     messages: ChatType[];
//   }
