'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ TypeOfWorkout }) {
      this.belongsTo(TypeOfWorkout, {foreignKey: 'typeId'})
      }
  }
  Workout.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    exOne: DataTypes.STRING,
    descOne: DataTypes.TEXT,
    exTwo: DataTypes.STRING,
    descTwo: DataTypes.TEXT,
    exThree: DataTypes.STRING,
    descThree: DataTypes.TEXT,
    exFour: DataTypes.STRING,
    descFour: DataTypes.TEXT,
    exFive: DataTypes.STRING,
    descFive: DataTypes.TEXT,
    isPublic: DataTypes.BOOLEAN,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};