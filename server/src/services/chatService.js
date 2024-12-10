const models = require('../../db/models');

class ChatService {
  #db;

  constructor(db) {
    this.#db = db;
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