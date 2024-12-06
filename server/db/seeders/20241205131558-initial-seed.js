'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserParameters', [
      {
        gender: 'male',
        weight: 50,
        height: 170,
        dateOfBirth: '1990-01-01',
        img: 'path/to/image1.jpg',
        userId: 1,
        secondName: 'Doe', 
        BMI: 17.3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserParameters', null, {});
  }
};
