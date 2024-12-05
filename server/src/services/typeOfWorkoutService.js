const models = require('../../db/models');

class TypeOfWorkoutService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  getAllTypes() {
    return this.#db.TypeOfWorkout.findAll();
  }
}

module.exports = new TypeOfWorkoutService(models);