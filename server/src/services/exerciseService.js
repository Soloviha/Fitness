const models = require('../../db/models');

class ExerciseService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  getAllExercise() {
    return this.#db.Exercise.findAll();
  }
}

module.exports = new ExerciseService(models);