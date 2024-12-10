'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DescCards', [
      {
        title: 'Fighter',
        image: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0204/PSYpBle31LjjLYC2n1jMdMrW.png',
        description: 'Бесконтактный бой на основе элементов различных видов боевых искусств, быстро приведет в форму, поможет развить силу и выносливость, укрепить сердечно-сосудистую систему.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'StrengthUp',
        image: 'http://localhost:3000/img1/IMG1984.jpeg',
        description: 'Многоповторная силовая тренировка со штангой поможет вам стать сильнее с помощью базовых упражнений дял рук, ног, спины и груди, подятнуть мышцы и привести тело в тонус. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HighTraining',
        image: 'http://localhost:3000/img1/IMG1986.jpeg',
        description: 'Высокоинтенсивная интервальная тренировка с минимальным набором оборудования, быстро разгоняющая метаболизм и приносящая ощутимые результаты. Стройность, лёгкость и прекрасное настроение гарантированы.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rider',
        image: 'https://petrasport.ru/d/kakie_myshcy_rabotayut_na_velatrenazhere_3.jpg',
        description: 'Интенсивная кардио-тренировка с использованием сайкл-тренажёра. Идеальна для всех, кто хочет  сбросить лишние килограммы, поможет создать красивый рельеф ягодиц и бёдер, проработать мышцы ног и пресса. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Run IT',
        image: 'http://localhost:3000/img1/IMG1985.JPG',
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
