'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DescCards', [
      {
        title: 'Fighter',
        image: 'http://localhost:3000/img1/one.jpg',
        description: 'Бесконтактный бой на основе элементов различных видов боевых искусств, быстро приведет в форму, поможет развить силу и выносливость, укрепить сердечно-сосудистую систему.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'StrengthUp',
        image: 'http://localhost:3000/img1/two.jpg',
        description: 'Многоповторная силовая тренировка со штангой поможет вам стать сильнее с помощью базовых упражнений дял рук, ног, спины и груди, подятнуть мышцы и привести тело в тонус. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HighTraining',
        image: 'http://localhost:3000/img1/three.jpg',
        description: 'Высокоинтенсивная интервальная тренировка с минимальным набором оборудования, быстро разгоняющая метаболизм и приносящая ощутимые результаты. Стройность, лёгкость и прекрасное настроение гарантированы.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rope',
        image: 'http://localhost:3000/img1/four.jpg',
        description: 'Интенсивная кардио-тренировка с использованием каната. Идеальна для всех, кто хочет  сбросить лишние килограммы, поможет создать красивый рельеф , развить выносливость и проработать мышцы рук . ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // rfrf
      {
        title: 'Run IT',
        image: 'http://localhost:3000/img1/five.jpg',
        description: 'Общая выносливость служит базисом для развития специальной выносливости, что является неминуемой ступенью развития любого спортсмена, прежде чем переходить к любому другому виду деятельности более узкой направленности. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DescCards', null, {});
  }
};
