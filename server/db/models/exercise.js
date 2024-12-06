'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Workout }) {
      this.belongsTo(Workout, { foreignKey: 'workoutId' });
    }
  }
  Exercise.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      time: DataTypes.INTEGER,
      reps: DataTypes.INTEGER,
      relax: DataTypes.INTEGER,
      isPublic: DataTypes.BOOLEAN,
      workoutId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Exercise',
    },
  );
  return Exercise;
};
