/* eslint-disable no-console */
const exerciseService = require('../services/exerciseService');

class ExerciseController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAllExercise = async (req, res) => {
    try {
      const exercises = await this.#service.getAllExercise();
      res.json(exercises);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };
}

module.exports = new ExerciseController(exerciseService);