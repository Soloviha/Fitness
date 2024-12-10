'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ TypeOfWorkout, Exercise }) {
      this.belongsTo(TypeOfWorkout, { foreignKey: 'typeId' });
      this.hasMany(Exercise, { foreignKey: 'workoutId' });
    }
  }
  Workout.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      isPublic: DataTypes.BOOLEAN,
      time: DataTypes.INTEGER,
      kcal: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Workout',
    },
  );
  return Workout;
};
