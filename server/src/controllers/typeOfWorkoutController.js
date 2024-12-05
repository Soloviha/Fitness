/* eslint-disable no-console */
const typeOfWorkoutService = require('../services/typeOfWorkoutService');

class TypeOfWorkoutController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAllTypes = async (req, res) => {
    try {
      const types = await this.#service.getAllTypes();
      res.json(types);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };
}

module.exports = new TypeOfWorkoutController(typeOfWorkoutService);