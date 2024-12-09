const models = require('../../db/models');

class ChatService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  async getAllMessages() {
   const allMasseges = await this.#db.Chat.findAll(); // Получаем все сообщения из базы данных
   return allMasseges.map(chat => ({
    id: chat.id,
    text: chat.response, // Или другое поле, которое вы хотите использовать
  }));
  }

  async getResponse(userMessage) {
    const chat = await this.#db.Chat.findOne({
      where: {
        question: userMessage,
      },
    });
    return chat ? chat.response : "Извините, я не понимаю вас.";
  }
}

module.exports = new ChatService(models);