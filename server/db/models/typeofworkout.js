'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfWorkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Workout }) {
      this.hasMany(Workout, {foreignKey: 'typeId'})
    }
  }
  TypeOfWorkout.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TypeOfWorkout',
  });
  return TypeOfWorkout;
};