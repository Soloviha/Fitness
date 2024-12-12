'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserParameter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, {foreignKey: 'userId'})
      }
  }
  UserParameter.init({
    gender:DataTypes.STRING,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    dateOfBirth:DataTypes.STRING,
    BMI:DataTypes.INTEGER,
    secondName:DataTypes.STRING,
    img:DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserParameter',
  });
  return UserParameter;
};