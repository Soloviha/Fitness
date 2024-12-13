'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DescCards', [
      {
        title: 'Fighter',
        image: 'http://localhost:3000/img1/yo.jpg',
        description: 'Бесконтактный бой на основе элементов различных видов боевых искусств, быстро приведет в форму, поможет развить силу и выносливость, укрепить сердечно-сосудистую систему.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'StrengthUp',
        image: 'http://localhost:3000/img1/pretty.jpg',
        description: 'Многоповторная силовая тренировка со штангой поможет вам стать сильнее с помощью базовых упражнений дял рук, ног, спины и груди, подятнуть мышцы и привести тело в тонус. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HighTraining',
        image: 'http://localhost:3000/img1/gas.jpg',
        description: 'Высокоинтенсивная интервальная тренировка с минимальным набором оборудования, быстро разгоняющая метаболизм и приносящая ощутимые результаты. Стройность, лёгкость и прекрасное настроение гарантированы.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rope',
        image: 'http://localhost:3000/img1/kanat.jpg',
        description: 'Интенсивная кардио-тренировка с использованием каната. Идеальна для всех, кто хочет  сбросить лишние килограммы, поможет создать красивый рельеф , развить выносливость и проработать мышцы рук . ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // rfrf
      {
        title: 'Run IT',
        image: 'http://localhost:3000/img1/beg.JPG',
        description: 'Общая выносливость служит базисом для развития специальной выносливости, что является неминуемой ступенью развития любого спортсмена, прежде чем переходить к любому другому виду деятельности более узкой направленности. ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Training with an expander',
        image: 'http://localhost:3000/img1/esp.JPG',
        description: 'Упражнения с фитнес резинкой помогают создать рельеф тела, сжечь калории и сделать фигуру подтянутой. Приспособление подходит для занятий на укрепление мускулатуры тела, рук, ног. Снаряд используют спортсмены с разным уровнем подготовки.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Body Pump',
        image: 'http://localhost:3000/img1/pump.JPG',
        description: 'Такие тренировки направлены на развитие сильных мышц и формирование красивого рельефа тела. При этом вид фитнеса считается доступным даже для новичков, поскольку исп ользуемый вес может варьироваться, а максимальная тяжесть достигает всего 6 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stretching',
        image: 'http://localhost:3000/img1/stret.JPG',
        description: 'Программа стретчинга предполагает классическую растяжку сухожилий и мышц. Система упражнений повышает гибкость позвоночника и эластичность связок, а также позволяет даже в зрелом возрасте улучшить двигательную активность. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Functional Training',
        image: 'http://localhost:3000/img1/func.JPG',
        description:'Особенность и преимущество подобных занятий - возможность проработки всех мускульных групп, включая мелкие, глубокие и мышцы-стабилизаторы. Подобные тренинги способствуют похудению, укрепляют мускулы и формируют правильную осанку.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pilates',
        image: 'http://localhost:3000/img1/pilat.JPG',
        description: 'Разработанная на основе тайчи и йоги система пилатес включает небольшие по амплитуде динамические движения, направленные на проработку каждой мышцы тела. Регулярное выполнение медленных техник делает мускулы сильными, выравнивает осанку и помогает в похудении.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Circuit training',
        image: 'http://localhost:3000/img1/around.JPG',
        description: 'Круговая тренировка задействует разные группы мышц. Она подразумевает конкретные упражнения, которые нужно сделать за определенный период времени. Между подходами организуется небольшой отдых. Такие занятия повышают выносливость, укрепляют иммунитет, улучшают самочувствие.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DescCards', null, {});
  }
};
