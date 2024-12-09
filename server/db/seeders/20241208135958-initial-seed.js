'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chats', [
      {
        question: 'Привет',
        response: 'Здравствуйте! Как я могу помочь вам?',
      },
      {
        question: 'Как дела?',
        response: 'У меня все хорошо, спасибо! А у вас?',
      },
      {
        question: 'Что ты умеешь?',
        response: 'Я могу отвечать на ваши вопросы и помогать с информацией.',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
