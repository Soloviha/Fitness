'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Workouts', [
      {
        name: 'Бегит',
        description: 'Сегодня бегит',
        isPublic: true,
        time: 20,
        kcal: 150,
        typeId: 1,
      },
      {
        name: 'Анжумания',
        description: 'Сегодня Анжумания',
        isPublic: true,
        time: 20,
        kcal: 150,
        typeId: 1,
      },
      {
        name: 'Пресс качат',
        description: 'Сегодня Пресс качат',
        isPublic: true,
        time: 20,
        kcal: 150,
        typeId: 1,
      },
      {
        name: 'Бегит сильно',
        description: 'Сегодня Бегит сильно',
        isPublic: true,
        time: 30,
        kcal: 250,
        typeId: 2,
      },
      {
        name: 'Анжумания сильно',
        description: 'Сегодня Анжумания сильно',
        isPublic: true,
        time: 30,
        kcal: 250,
        typeId: 2,
      },
      {
        name: 'Пресс качат сильно',
        description: 'Сегодня Пресс качат сильно',
        isPublic: true,
        time: 30,
        kcal: 250,
        typeId: 2,
      },
      {
        name: 'Бегит очень сильно',
        description: 'Сегодня Бегит очень сильно',
        isPublic: true,
        time: 40,
        kcal: 300,
        typeId: 3,
      },
      {
        name: 'Анжумания очень сильно',
        description: 'Сегодня Анжумания очень сильно',
        isPublic: true,
        time: 40,
        kcal: 300,
        typeId: 3,
      },
      {
        name: 'Пресс качат очень сильно',
        description: 'Сегодня Пресс качат очень сильно',
        isPublic: true,
        time: 40,
        kcal: 300,
        typeId: 3,
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
