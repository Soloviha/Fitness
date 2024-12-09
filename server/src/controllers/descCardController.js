const descCardService = require("../services/descCardService");


class DescCardController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAllDescCard = async (req, res) => {
    try {
      const exercises = await this.#service.getAllDescCard();
      res.json(exercises);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };
}

module.exports = new DescCardController(descCardService);