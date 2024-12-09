'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeOfWorkouts', [
      {
        name: 'Для начинающих',
        description:
          'Эти тренировки идеально подходят для тех, кто только начинает свой путь в фитнесе. Они сосредоточены на базовых упражнениях, которые помогают развить силу, гибкость и выносливость. Программы включают простые движения, которые легко выполнять, с акцентом на правильную технику. Тренировки для начинающих помогут вам привыкнуть к физической активности и подготовить тело к более сложным нагрузкам. Это отличный способ войти в мир фитнеса без излишнего стресса.',
      },
      {
        name: 'Для продвинутых',
        description:
          'Эти тренировки предназначены для тех, кто уже имеет некоторый опыт и хочет повысить свою физическую форму. Программы включают более сложные упражнения и комбинации, которые требуют большей силы и выносливости. Тренировки для продвинутых помогут развить мышечную массу и улучшить общую физическую подготовку. Участники смогут испытать свои пределы и достичь новых результатов. Эти занятия подойдут тем, кто стремится к прогрессу и улучшению своих спортивных показателей.',
      },
      {
        name: 'Для профессионалов',
        description:
          'Эти тренировки созданы для тех, кто уже достиг высоких результатов в спорте и ищет новые вызовы. Программы включают интенсивные упражнения и специализированные методики, направленные на максимизацию физических возможностей. Тренировки для профессионалов требуют высокой степени физической подготовки и дисциплины. Они помогут улучшить технику, увеличить силу и выносливость, а также подготовиться к соревнованиям. Это идеальный выбор для спортсменов, стремящихся к совершенству и новым достижениям.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeOfWorkouts', null, {});
  },
};
