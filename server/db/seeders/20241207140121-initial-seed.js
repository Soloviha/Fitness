'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DescCards', [
      {
        title: 'Fighter',
        image: 'https://img.freepik.com/free-photo/young-female-practicing-kickboxing_23-2149127350.jpg?t=st=1733849394~exp=1733852994~hmac=d6d15bf58a6d0f0a854d4fc73ab8abe928a9732479a1038075e11d2bdca29903&w=740',
        description: 'Бесконтактный бой на основе элементов различных видов боевых искусств, быстро приведет в форму, поможет развить силу и выносливость, укрепить сердечно-сосудистую систему.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'StrengthUp',
        image: 'https://img.freepik.com/free-photo/full-shot-woman-holding-dumbbell_23-2149267068.jpg?t=st=1733849454~exp=1733853054~hmac=f18d781d11df5c507211a21883d929d1f37de01480ecfc8a111920c99a4baa5f&w=1380',
        description: 'Многоповторная силовая тренировка со штангой поможет вам стать сильнее с помощью базовых упражнений дял рук, ног, спины и груди, подятнуть мышцы и привести тело в тонус. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HighTraining',
        image: 'https://img.freepik.com/free-photo/sporty-young-woman-does-exercises-with-dumbbells-bodybuilding-workout-being-good-physical-shape-dressed-cropped-top-leggings-listens-music-via-headphones-isolated-pink-background_273609-60320.jpg?t=st=1733850474~exp=1733854074~hmac=101fff414aabf2a6ce65b7ec15c4545107f2bd6aa6121a57adbc8ffccdb9403f&w=1380',
        description: 'Высокоинтенсивная интервальная тренировка с минимальным набором оборудования, быстро разгоняющая метаболизм и приносящая ощутимые результаты. Стройность, лёгкость и прекрасное настроение гарантированы.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rider',
        image: 'https://img.freepik.com/free-photo/portrait-young-spotive-girl-doing-exercises-with-rope-keeping-body-fit-isolated-green-background-neon_155003-45635.jpg?t=st=1733849723~exp=1733853323~hmac=07869cece23290c1f72e2a90195ea0d638d9a85cf707e8c8257aea414efcc440&w=1380',
        description: 'Интенсивная кардио-тренировка с использованием сайкл-тренажёра. Идеальна для всех, кто хочет  сбросить лишние килограммы, поможет создать красивый рельеф ягодиц и бёдер, проработать мышцы ног и пресса. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Run IT',
        image: 'https://img.freepik.com/free-photo/amazing-woman-running-while-training_197531-13088.jpg?t=st=1733849898~exp=1733853498~hmac=889084cf74acece984faf610c6b46e9efc5e6ddeed16da965ddc6ae5f6711333&w=1380',
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
