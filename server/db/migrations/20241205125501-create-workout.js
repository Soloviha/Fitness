'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      exOne: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descOne: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      exTwo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descTwo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      exThree: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descThree: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      exFour: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descFour: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      exFive: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descFive: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TypeOfWorkouts',
          key: 'id'
          },
          allowNull: false,
          onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Workouts');
  }
};