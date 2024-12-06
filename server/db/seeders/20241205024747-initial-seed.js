'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeOfWorkouts', [
      {
        name: 'Для начинающих',
        description: 'Что-то для начинающих',
      },
      {
        name: 'Для продвинутых',
        description: 'Что-то для продвинутых',
      },
      {
        name: 'Для профессионалов',
        description: 'Тебе сюда не надо',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
