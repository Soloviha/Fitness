/* eslint-disable no-console */
const chatService = require('../services/chatService');

class ChatController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getResponse = async (req, res) => {
    const { userMessage } = req.body;
    try {
      const response = await this.#service.getResponse(userMessage);
      res.json({ response });
    } catch (error) {
      console.error(error);
      res.status(500).send("Ошибка сервера");
    }
  };
}

module.exports = new ChatController(chatService);