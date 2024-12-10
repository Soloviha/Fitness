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
      isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      time: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kcal: {
        type: Sequelize.INTEGER,
        allowNull: false,
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