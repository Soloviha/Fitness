const models = require('../../db/models');

class WorkoutService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  getAllWorkouts() {
    return this.#db.Workout.findAll();
  }
}

module.exports = new WorkoutService(models);