'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'DescCards',
      [
        {
          title: 'Fighter',
          image:
            'https://img.freepik.com/free-photo/young-female-practicing-kickboxing_23-2149127350.jpg?t=st=1733849394~exp=1733852994~hmac=d6d15bf58a6d0f0a854d4fc73ab8abe928a9732479a1038075e11d2bdca29903&w=740',

          description:
            'Бесконтактный бой на основе элементов различных видов боевых искусств, быстро приведет в форму, поможет развить силу и выносливость, укрепить сердечно-сосудистую систему.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'StrengthUp',
          image:
            'https://img.freepik.com/free-photo/full-shot-woman-holding-dumbbell_23-2149267068.jpg?t=st=1733849454~exp=1733853054~hmac=f18d781d11df5c507211a21883d929d1f37de01480ecfc8a111920c99a4baa5f&w=1380',

          description:
            'Многоповторная силовая тренировка со штангой поможет вам стать сильнее с помощью базовых упражнений дял рук, ног, спины и груди, подятнуть мышцы и привести тело в тонус. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'HighTraining',
          image:
            'https://img.freepik.com/free-photo/sporty-young-woman-does-exercises-with-dumbbells-bodybuilding-workout-being-good-physical-shape-dressed-cropped-top-leggings-listens-music-via-headphones-isolated-pink-background_273609-60320.jpg?t=st=1733850474~exp=1733854074~hmac=101fff414aabf2a6ce65b7ec15c4545107f2bd6aa6121a57adbc8ffccdb9403f&w=1380',

          description:
            'Высокоинтенсивная интервальная тренировка с минимальным набором оборудования, быстро разгоняющая метаболизм и приносящая ощутимые результаты. Стройность, лёгкость и прекрасное настроение гарантированы.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Rope',
          image:
            'https://img.freepik.com/free-photo/portrait-young-spotive-girl-doing-exercises-with-rope-keeping-body-fit-isolated-green-background-neon_155003-45635.jpg?t=st=1733849723~exp=1733853323~hmac=07869cece23290c1f72e2a90195ea0d638d9a85cf707e8c8257aea414efcc440&w=1380',
          description:
            'Интенсивная кардио-тренировка с использованием каната. Идеальна для всех, кто хочет  сбросить лишние килограммы, поможет создать красивый рельеф , развить выносливость и проработать мышцы рук . ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // rfrf
        {
          title: 'Run IT',
          image:
            'https://img.freepik.com/free-photo/amazing-woman-running-while-training_197531-13088.jpg?t=st=1733849898~exp=1733853498~hmac=889084cf74acece984faf610c6b46e9efc5e6ddeed16da965ddc6ae5f6711333&w=1380',

          description:
            'Общая выносливость служит базисом для развития специальной выносливости, что является неминуемой ступенью развития любого спортсмена, прежде чем переходить к любому другому виду деятельности более узкой направленности. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Тренировка с эспандером',
          image:
            'https://img.freepik.com/free-photo/high-angle-female-training-with-elastic-band_23-2148435356.jpg?ga=GA1.1.604849977.1732891447&semt=ais_hybrid',
          description:
            'Упражнения с фитнес резинкой помогают создать рельеф тела, сжечь калории и сделать фигуру подтянутой. Приспособление подходит для занятий на укрепление мускулатуры тела, рук, ног. Снаряд используют спортсмены с разным уровнем подготовки.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Body Pump',
          image:
            'https://img.freepik.com/free-photo/sporty-young-woman-does-exercises-with-dumbbells-bodybuilding-workout-being-good-physical-shape-dressed-cropped-top-leggings-listens-music-via-headphones-isolated-pink-background_273609-60320.jpg?t=st=1734041362~exp=1734044962~hmac=bf73fd8f8aff65ead1b138e859cfca8f30e6e38dd8d0f9ec7df7ee4fa53e6d17&w=1060',
          description:
            'Такие тренировки направлены на развитие сильных мышц и формирование красивого рельефа тела. При этом вид фитнеса считается доступным даже для новичков, поскольку исп ользуемый вес может варьироваться, а максимальная тяжесть достигает всего 6 кг',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Стрейчинг',
          image:
            'https://img.freepik.com/free-photo/young-sportive-woman-training-isolated_155003-27643.jpg?t=st=1734041479~exp=1734045079~hmac=2350ede950298057733b3dc5c1db3ae226d251b89c0e9b8a8491251a143eb3af&w=1060',
          description:
            'Программа стретчинга предполагает классическую растяжку сухожилий и мышц. Система упражнений повышает гибкость позвоночника и эластичность связок, а также позволяет даже в зрелом возрасте улучшить двигательную активность. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Functional Training',
          image:
            'https://img.freepik.com/free-photo/close-up-woman-doing-crossfit-workout_23-2149080495.jpg?t=st=1734042210~exp=1734045810~hmac=48cbfa823c920460e90b4752a3c87caa553f365e49dff5826a31f8840cbd5abf&w=1060',
          description:
            'Особенность и преимущество подобных занятий - возможность проработки всех мускульных групп, включая мелкие, глубокие и мышцы-стабилизаторы. Подобные тренинги способствуют похудению, укрепляют мускулы и формируют правильную осанку.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пилатес',
          image:
            'https://img.freepik.com/free-photo/full-shot-woman-holding-foot-high-angle_23-2148877042.jpg?t=st=1734041946~exp=1734045546~hmac=bf89fa653f85ef330b3173a0d9c43370aba8d4832b7e2b327072c9d5d7630721&w=740',
          description:
            'Разработанная на основе тайчи и йоги система пилатес включает небольшие по амплитуде динамические движения, направленные на проработку каждой мышцы тела. Регулярное выполнение медленных техник делает мускулы сильными, выравнивает осанку и помогает в похудении.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Круговая тренировка',
          image:
            'https://img.freepik.com/free-photo/full-shot-blonde-woman-doing-plank_23-2148498684.jpg?t=st=1734042643~exp=1734046243~hmac=64cd35d9171266720c8836e90cef233d290574e7daa24676208a9eae26b7fc3f&w=1060',
          description:
            'Круговая тренировка задействует разные группы мышц. Она подразумевает конкретные упражнения, которые нужно сделать за определенный период времени. Между подходами организуется небольшой отдых. Такие занятия повышают выносливость, укрепляют иммунитет, улучшают самочувствие.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DescCards', null, {});
  },
};
