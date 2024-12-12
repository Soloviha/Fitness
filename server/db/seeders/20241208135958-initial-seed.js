'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chats', [
      {
        question: 'Привет',
        response: 'Здравствуйте! Как я могу помочь вам?',
      },
      {
        question: 'Бот, как тебя зовут?',
        response: 'Имя Вашего помощника: Паша UsePlaky',
      },
      {
        question: 'Как тебя зовут?',
        response: 'Моё имя Джованни Джорджио, но все зовут меня ДжоДжо.',
      },
      {
        question: 'Как дела?',
        response: 'У меня все хорошо, спасибо! А у вас?',
      },
      {
        question: 'Что ты умеешь?',
        response: 'Я могу отвечать на ваши вопросы и помогать с информацией.',
      },
      {
        question: 'Спасибо',
        response: 'Всегда рад Вам помочь!',
      },
      {
        question: 'Что нужно, чтобы начать тренироваться?',
        response:
          'Для начала тренировки Вы можете перейти в раздел "Тренировки" вверху страницы. Далее выберите уровень сложности и необходимый комплекс упражнений.',
      },
      {
        question: 'Как мне начать тренироваться?',
        response:
          'Для начала тренировки Вы можете перейти в раздел "Тренировки" вверху страницы. Далее выберите уровень сложности и необходимый комплекс упражнений.',
      },
      {
        question: 'Что мне сделать, чтобы отслеживать свой прогресс?',
        response:
          'Для отслеживания изменений Ваших физических метрик необхоимо зарегистрироваться. Это можно сделать, нажав кнопку "Личный кабинет" вверху страницы. Далее перейдите в раздел "Пользовательские параметры".',
      },
      {
        question: 'Как я могу отслеживать прогресс своих тренировок?',
        response:
          'Для отслеживания изменений Ваших физических метрик необхоимо зарегистрироваться. Это можно сделать, нажав кнопку "Личный кабинет" вверху страницы. Далее перейдите в раздел "Пользовательские параметры".',
      },
      {
        question: 'Как я могу отслеживать свой прогресс?',
        response:
          'Для отслеживания изменений Ваших физических метрик необхоимо зарегистрироваться. Это можно сделать, нажав кнопку "Личный кабинет" вверху страницы. Далее перейдите в раздел "Пользовательские параметры".',
      },
      {
        question: 'Как я могу заниматься, если у меня нет доступа к компьютеру?',
        response:
          'Для занятий вдали от дома или без доступа к компьютеру Вы можете скачать на Ваше мобильное устройство прогрессивное веб-приложение. Это можно сделать, нажав на кнопку установки. Она находится справа в адресной строке браузера.',
      },
      {
        question: 'Как я могу более удобно пользоваться сервисом?',
        response:
          'Для занятий вдали от дома или без доступа к компьютеру Вы можете скачать на Ваше мобильное устройство прогрессивное веб-приложение. Это можно сделать, нажав на кнопку установки. Она находится справа в адресной строке браузера.',
      },
      {
        question: 'А что если у меня нет компьютера?',
        response:
          'Для занятий вдали от дома или без доступа к компьютеру Вы можете скачать на Ваше мобильное устройство прогрессивное веб-приложение. Это можно сделать, нажав на кнопку установки. Она находится справа в адресной строке браузера.',
      },
      {
        question: 'У этого сайта есть мобильное приложение?',
        response:
          'Для занятий вдали от дома или без доступа к компьютеру Вы можете скачать на Ваше мобильное устройство прогрессивное веб-приложение. Это можно сделать, нажав на кнопку установки. Она находится справа в адресной строке браузера.',
      },
      {
        question: 'Пока!',
        response:
        'Был рад Вам помочь! До встречи!',
      },
      {
        question: 'До встречи!',
        response:
        'Был рад Вам помочь! До встречи!',
      },
      {
        question: 'До свидания!',
        response:
        'Был рад Вам помочь! До встречи!',
      },
      {
        question: 'Как начать заниматься фитнесом?',
        response:
          'Начните с определения своих целей и выбора подходящего типа тренировок. Для новичков подойдут простые программы.',
      },
      {
        question: 'Что такое разминка?',
        response:
          'Разминка — это подготовка мышц и суставов к физической нагрузке. Она помогает избежать травм.',
      },
      {
        question: 'Сколько раз в неделю нужно тренироваться?',
        response:
          'Рекомендуется тренироваться 3-5 раз в неделю в зависимости от ваших целей и уровня подготовки.',
      },
      {
        question: 'Как выбрать программу тренировок?',
        response:
          'Выбор программы зависит от ваших целей: похудение, набор мышечной массы или улучшение выносливости.',
      },
      {
        question: 'Что такое кардионагрузка?',
        response:
          'Кардионагрузка — это упражнения, которые повышают частоту сердечных сокращений, например, бег, плавание или велоспорт.',
      },
      {
        question: 'Как правильно выполнять упражнения?',
        response:
          'Важно следить за техникой выполнения. Начинайте с небольших весов и постепенно увеличивайте нагрузку.',
      },
      {
        question: 'Что такое силовые тренировки?',
        response:
          'Силовые тренировки направлены на развитие мышечной силы с использованием свободных весов или тренажёров.',
      },
      {
        question: 'Как восстановиться после тренировки?',
        response:
          'После тренировки важно хорошо отдохнуть, пить много воды и правильно питаться для восстановления мышц.',
      },
      {
        question: 'Что такое HIIT?',
        response:
          'HIIT (высокоинтенсивные интервальные тренировки) — это тренировки с чередованием интенсивных нагрузок и отдыха.',
      },
      {
        question: 'Как правильно питаться для похудения?',
        response:
          'Сосредоточьтесь на сбалансированном питании, включайте больше белка, овощей и избегайте переработанных продуктов.',
      },
      {
        question: 'Что такое растяжка?',
        response:
          'Растяжка помогает улучшить гибкость и предотвратить травмы. Рекомендуется делать её после тренировки.',
      },
      {
        question: 'Как мотивировать себя на тренировки?',
        response:
          'Установите конкретные цели, найдите партнёра для тренировок и следите за своим прогрессом.',
      },
      {
        question: 'Что такое функциональные тренировки?',
        response:
          'Функциональные тренировки направлены на развитие силы и координации, используя движения, которые применяются в повседневной жизни.',
      },
      {
        question: 'Как избежать травм во время тренировок?',
        response:
          'Следите за техникой выполнения упражнений, не перегружайте себя и обязательно делайте разминку.',
      },
      {
        question: 'Как выбрать тренажёрный зал?',
        response:
          'Обратите внимание на расположение, оборудование и наличие квалифицированных тренеров.',
      },
      {
        question: 'Что такое кроссфит?',
        response:
          'Кроссфит — это высокоинтенсивная тренировка, которая сочетает элементы различных видов спорта и функциональных упражнений.',
      },
      {
        question: 'Как улучшить свою выносливость?',
        response:
          'Для улучшения выносливости включите в тренировки кардионагрузки и постепенно увеличивайте продолжительность занятий.',
      },
      {
        question: 'Что такое тренировка на массу?',
        response:
          'Тренировка на массу включает в себя силовые упражнения с большими весами и меньшим количеством повторений.',
      },
      {
        question: 'Как контролировать свой прогресс?',
        response:
          'Ведите дневник тренировок, фиксируйте результаты и регулярно пересматривайте свои цели.',
      },
      {
        question: 'Что такое диета для спортсменов?',
        response:
          'Диета для спортсменов включает в себя достаточное количество белков, углеводов и жиров для поддержания энергии и восстановления.',
      },
      {
        question: 'Как правильно дышать во время тренировок?',
        response:
          'Следите за дыханием: вдыхайте во время расслабления и выдыхайте при усилии.',
      },
      {
        question: 'Что такое йога?',
        response:
          'Йога — это практика, которая сочетает физические упражнения, дыхательные техники и медитацию для улучшения общего состояния.',
      },
      {
        question: 'Как выбрать спортивную обувь?',
        response:
          'Обратите внимание на тип тренировок, амортизацию и поддержку стопы. Подберите обувь, соответствующую вашему типу стопы.',
      },
      {
        question: 'Что такое бодибилдинг?',
        response:
          'Бодибилдинг — это вид спорта, сосредоточенный на наращивании мышечной массы и улучшении внешнего вида тела.',
      },
      {
        question: 'Как поддерживать мотивацию на длительном сроке?',
        response:
          'Ставьте новые цели, меняйте программы тренировок и находите вдохновение в успехах других.',
      },
      {
        question: 'Что такое спортивное питание?',
        response:
          'Спортивное питание включает в себя добавки и продукты, которые помогают улучшить результаты тренировок и восстановление.',
      },
      {
        question: 'Как избежать плато в тренировках?',
        response:
          'Изменяйте программу тренировок, увеличивайте нагрузки и варьируйте упражнения.',
      },
      {
        question: 'Как правильно делать приседания?',
        response:
          'Ставьте ноги на ширине плеч, спину держите прямо, а колени не должны выходить за носки ног.',
      },
      {
        question: 'Что такое тренировка на гибкость?',
        response:
          'Тренировка на гибкость включает в себя упражнения, которые помогают увеличить диапазон движений в суставах.',
      },
      {
        question: 'Как выбрать подходящий вид спорта?',
        response:
          'Выберите вид спорта, который вам нравится, и который соответствует вашим целям и физическим возможностям.',
      },
      {
        question: 'Как правильно отдыхать между подходами?',
        response:
          'Отдыхайте 30-90 секунд между подходами, в зависимости от целей тренировки и уровня нагрузки.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeOfWorkouts', null, {});
  },
};
