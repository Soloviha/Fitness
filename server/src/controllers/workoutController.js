/* eslint-disable no-console */
const workoutService = require('../services/workoutService');

class WorkoutController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAllWorkouts = async (req, res) => {
    try {
      const workouts = await this.#service.getAllWorkouts();
      res.json(workouts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера', error });
    }
  };
}

module.exports = new WorkoutController(workoutService);