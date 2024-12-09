// Сиды для тренировок
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Workouts', [
      // Начинающие
      {
        name: 'Основы',
        description: 'Базовая тренировка для начинающих.',
        isPublic: true,
        time: 20,
        kcal: 150,
        typeId: 1,
      },
      {
        name: 'Полная зарядка',
        description: 'Комплекс упражнений для общей физической подготовки.',
        isPublic: true,
        time: 25,
        kcal: 180,
        typeId: 1,
      },
      {
        name: 'Легкий HIIT',
        description: 'Интенсивная тренировка с элементами HIIT.',
        isPublic: true,
        time: 30,
        kcal: 200,
        typeId: 1,
      },
      {
        name: 'Начинающий тренер',
        description: 'Тренировка для тех, кто только начинает.',
        isPublic: true,
        time: 25,
        kcal: 170,
        typeId: 1,
      },
      {
        name: 'Утренний заряд',
        description: 'Тренировка для бодрого начала дня.',
        isPublic: true,
        time: 30,
        kcal: 200,
        typeId: 1,
      },
      {
        name: 'Полезный отдых',
        description: 'Тренировка для восстановления.',
        isPublic: true,
        time: 30,
        kcal: 220,
        typeId: 1,
      },
      {
        name: 'Основы силы',
        description: 'Тренировка для развития силы.',
        isPublic: true,
        time: 25,
        kcal: 180,
        typeId: 1,
      },
      {
        name: 'Энергия утра',
        description: 'Зарядка для повышения энергии.',
        isPublic: true,
        time: 30,
        kcal: 210,
        typeId: 1,
      },
      {
        name: 'Легкая активность',
        description: 'Тренировка для поддержания активности.',
        isPublic: true,
        time: 20,
        kcal: 150,
        typeId: 1,
      },

      // Средний уровень
      {
        name: 'Уровень 1',
        description: 'Тренировка для среднего уровня.',
        isPublic: true,
        time: 30,
        kcal: 250,
        typeId: 2,
      },
      {
        name: 'Интенсив',
        description: 'Сложная тренировка для продвинутых.',
        isPublic: true,
        time: 35,
        kcal: 280,
        typeId: 2,
      },
      // {
      //   name: 'Полная мощь',
      //   description: 'Тренировка для максимальной нагрузки.',
      //   isPublic: true,
      //   time: 40,
      //   kcal: 320,
      //   typeId: 2,
      // },
      {
        name: 'Средний уровень',
        description: 'Умеренная тренировка для развития.',
        isPublic: true,
        time: 35,
        kcal: 290,
        typeId: 2,
      },
      // {
      //   name: 'Энергия',
      //   description: 'Тренировка для повышения энергии.',
      //   isPublic: true,
      //   time: 40,
      //   kcal: 310,
      //   typeId: 2,
      // },
      {
        name: 'Сила и выносливость',
        description: 'Тренировка для развития силы и выносливости.',
        isPublic: true,
        time: 45,
        kcal: 350,
        typeId: 2,
      },
      {
        name: 'Интенсивная тренировка',
        description: 'Тренировка с высокой интенсивностью.',
        isPublic: true,
        time: 50,
        kcal: 400,
        typeId: 2,
      },
      {
        name: 'Прокачка',
        description: 'Тренировка для прокачки мышц.',
        isPublic: true,
        time: 45,
        kcal: 370,
        typeId: 2,
      },
      {
        name: 'Мощный комплекс',
        description: 'Комплексная тренировка для всех групп мышц.',
        isPublic: true,
        time: 50,
        kcal: 420,
        typeId: 2,
      },

      // Подготовленный уровень
      {
        name: 'Эксперт',
        description: 'Тренировка для опытных атлетов.',
        isPublic: true,
        time: 45,
        kcal: 400,
        typeId: 3,
      },
      {
        name: 'Максимум',
        description: 'Тренировка на максимальную нагрузку.',
        isPublic: true,
        time: 50,
        kcal: 450,
        typeId: 3,
      },
      {
        name: 'Ультра',
        description: 'Интенсивная тренировка для профессионалов.',
        isPublic: true,
        time: 60,
        kcal: 500,
        typeId: 3,
      },
      {
        name: 'Мощный комплекс',
        description: 'Сложная тренировка для максимальной нагрузки.',
        isPublic: true,
        time: 60,
        kcal: 520,
        typeId: 3,
      },
      {
        name: 'Интенсивный HIIT',
        description: 'Интенсивная тренировка с элементами HIIT.',
        isPublic: true,
        time: 50,
        kcal: 480,
        typeId: 3,
      },
      {
        name: 'Супер тренировка',
        description: 'Тренировка для наращивания силы и выносливости.',
        isPublic: true,
        time: 60,
        kcal: 550,
        typeId: 3,
      },
      // {
      //   name: 'Высший пилотаж',
      //   description: 'Тренировка для опытных атлетов.',
      //   isPublic: true,
      //   time: 60,
      //   kcal: 600,
      //   typeId: 3,
      // },
      {
        name: 'Классика',
        description: 'Классическая тренировка для поддержания формы.',
        isPublic: true,
        time: 55,
        kcal: 570,
        typeId: 3,
      },
      {
        name: 'Профессионал',
        description: 'Тренировка для профессиональных спортсменов.',
        isPublic: true,
        time: 60,
        kcal: 650,
        typeId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Workouts', null, {});
  },
};
// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('Workouts', [
//       {
//         name: 'Бегит',
//         description: 'Сегодня бегит',
//         isPublic: true,
//         time: 20,
//         kcal: 150,
//         typeId: 1,
//       },
//       {
//         name: 'Анжумания',
//         description: 'Сегодня Анжумания',
//         isPublic: true,
//         time: 20,
//         kcal: 150,
//         typeId: 1,
//       },
//       {
//         name: 'Пресс качат',
//         description: 'Сегодня Пресс качат',
//         isPublic: true,
//         time: 20,
//         kcal: 150,
//         typeId: 1,
//       },
//       {
//         name: 'Бегит сильно',
//         description: 'Сегодня Бегит сильно',
//         isPublic: true,
//         time: 30,
//         kcal: 250,
//         typeId: 2,
//       },
//       {
//         name: 'Анжумания сильно',
//         description: 'Сегодня Анжумания сильно',
//         isPublic: true,
//         time: 30,
//         kcal: 250,
//         typeId: 2,
//       },
//       {
//         name: 'Пресс качат сильно',
//         description: 'Сегодня Пресс качат сильно',
//         isPublic: true,
//         time: 30,
//         kcal: 250,
//         typeId: 2,
//       },
//       {
//         name: 'Бегит очень сильно',
//         description: 'Сегодня Бегит очень сильно',
//         isPublic: true,
//         time: 40,
//         kcal: 300,
//         typeId: 3,
//       },
//       {
//         name: 'Анжумания очень сильно',
//         description: 'Сегодня Анжумания очень сильно',
//         isPublic: true,
//         time: 40,
//         kcal: 300,
//         typeId: 3,
//       },
//       {
//         name: 'Пресс качат очень сильно',
//         description: 'Сегодня Пресс качат очень сильно',
//         isPublic: true,
//         time: 40,
//         kcal: 300,
//         typeId: 3,
//       },
//     ]);
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   },
// };
