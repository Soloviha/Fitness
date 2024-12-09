module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Exercises', [
      // Тренировка 1 (workoutId: 1)
      {
        name: 'Приседания',
        description:
          'Станьте прямо, ноги на ширине плеч. Опуститесь в присед, сгибая колени и отводя таз назад, как будто садитесь на стул. Держите спину прямой и не поднимайте пятки от пола.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2022-03/1648142689_53-sportishka-com-p-prisedaniya-dlya-yagodits-sport-krasivie-f-58.jpg',
      },
      {
        name: 'Отжимания',
        description:
          'Лягте на пол, руки на ширине плеч. Поднимите тело, опираясь на руки и ноги, сохраняя прямую линию от головы до пяток. Опуститесь вниз, сгибая локти, и вернитесь в исходное положение.',
        time: 30,
        reps: 5,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1311342098/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B5%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=flTXZfPbkfBnjG3ug-1PtIFEb9njno0U8kFZMF_BVOY=',
      },
      {
        name: 'Берпи',
        description:
          'Сделайте присед, затем положите руки на пол и прыгните ногами назад в планку. Вернитесь в присед и выполните прыжок вверх, поднимая руки над головой. Это упражнение сочетает кардио и силовую нагрузку.',
        time: 30,
        reps: 5,
        relax: 60,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Планка',
        description:
          'Лягте на живот, поднимите тело на локтях и носках. Держите тело в прямой линии, не прогибая спину и не поднимая таз. Удерживайте позицию, напрягая мышцы живота и ягодиц.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1311342098/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B5%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=flTXZfPbkfBnjG3ug-1PtIFEb9njno0U8kFZMF_BVOY=',
      },
      {
        name: 'Выпады',
        description:
          'Шагните вперед одной ногой и опуститесь, сгибая оба колена. Заднее колено должно почти касаться пола, а переднее колено не должно выходить за линию стопы. Вернитесь в исходное положение и повторите с другой ноги.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1210548146/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%BE%D0%BD%D0%BA%D0%B8%D0%B9-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%BE%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D1%8B%D0%B5-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D1%81-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE.jpg?s=612x612&w=0&k=20&c=X0E2CoqclsmVmR9WHGR5Pv2MgDQUzX57OG2b4ub7dn0=',
      },
      {
        name: 'Обратные отжимания',
        description:
          'Сядьте на край стула, опустите тело вниз, сгибая локти. Держите локти близко к телу и возвращайтесь в исходное положение, используя силу трицепсов. Это упражнение отлично развивает мышцы рук.',
        time: 30,
        reps: 5,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://kotsport.ru/wp-content/uploads/2023/12/obratnye-otzhimaniia-na-stule-1.webp',
      },
      {
        name: 'Русские скручивания',
        description:
          'Сидя, наклонитесь назад, удерживая спину прямой. Скручивайтесь в стороны, касаясь пола рукой. Это упражнение эффективно тренирует косые мышцы живота.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://s-dt2.cloud.edgecore.ru/FSimageresizecache/app/uploads/public/648/d5b/27d/648d5b27dbc9e537590294__99999x99999.webp',
      },
      {
        name: 'Мостик',
        description:
          'Лягте на спину, ноги согнуты в коленях, стопы на полу. Поднимите таз вверх, напрягая ягодицы и мышцы живота. Удерживайте позицию несколько секунд, затем опустите таз обратно.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture: 'https://lifehacker.ru/wp-content/uploads/2020/05/s_1589981988.jpg',
      },
      {
        name: 'Боковая планка',
        description:
          'Лягте на бок, опираясь на локоть и ноги. Поднимите тело, формируя прямую линию от головы до пяток. Удерживайте позицию, напрягая боковые мышцы живота.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 1,
        isPublic: true,
        picture:
          'https://img.championat.com/s/732x488/news/big/w/p/bokovaya-planka-osobennosti-i-tehnika-vypolneniya_17271796381008003503.jpg',
      },

      // Тренировка 2 (workoutId: 2)
      {
        name: 'Приседания с весом',
        description:
          'Сделайте приседания с утяжелением, держа гантели или штангу на плечах. Следите за тем, чтобы колени не выходили за линию носков, а спина оставалась ровной.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture: 'https://shape.ru/images/fitnes/silovoj-trening/squat1.jpg',
      },
      {
        name: 'Отжимания от стенки',
        description:
          'Отжимания с опорой на стену. Станьте на расстоянии шага от стены, руки на уровне плеч. Сгибайте локти, приближая грудь к стене, затем вернитесь в исходное положение.',
        time: 30,
        reps: 8,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture:
          'https://www.ingoodfit.ru/wp-content/uploads/2020/11/otzhimaniya-ot-steny-polza.jpg',
      },
      {
        name: 'Берпи',
        description:
          'Сделайте берпи для кардио нагрузки. Начните с приседа, затем прыгните в планку, вернитесь в присед и выполните прыжок вверх. Это упражнение развивает силу и выносливость.',
        time: 30,
        reps: 6,
        relax: 60,
        workoutId: 2,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Планка с поднятой ногой',
        description:
          'Лягте на живот, поднимите тело на локтях и одну ногу. Удерживайте позицию, напрягая мышцы живота и ягодиц. Это упражнение укрепляет мышцы кора.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture:
          'https://images.thevoicemag.ru/upload/img_cache/055/055ad1d72a171527aaca8ba06027bf0f_cropped_510x237.jpg',
      },
      {
        name: 'Выпады с поворотом',
        description:
          'Шагните вперед и повернитесь в сторону, держа руки на поясе. Это упражнение развивает равновесие и координацию.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture: '',
      },
      {
        name: 'Обратные отжимания на стуле',
        description:
          'Сядьте на край стула, опустите тело вниз, сгибая локти. Держите локти близко к телу и возвращайтесь в исходное положение, используя силу трицепсов.',
        time: 30,
        reps: 6,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture:
          'https://kotsport.ru/wp-content/uploads/2023/12/obratnye-otzhimaniia-na-stule-1.webp',
      },
      {
        name: 'Русские скручивания с легким весом',
        description:
          'Сидя, наклонитесь назад и скручивайтесь с весом. Это упражнение эффективно тренирует косые мышцы, а также улучшает гибкость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture: '',
      },
      {
        name: 'Мостик с одной ногой',
        description:
          'Лягте на спину и поднимите таз одной ногой. Это упражнение развивает силу ягодиц и мышц ног.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture: 'https://ws.sportmenu.com/uploads/store/Texts/Text1220/b8c95d.jpg',
      },
      {
        name: 'Боковая планка с поднятой ногой',
        description:
          'Лягте на бок, поднимите тело и одну ногу. Удерживайте позицию, напрягая боковые мышцы живота и ягодиц.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 2,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/bokovaya-planka/f7.jpg',
      },

      // Тренировка 3 (workoutId: 3)
      {
        name: 'Приседания с прыжком',
        description:
          'Сделайте приседания и взлетите вверх, приземляясь в присед. Это упражнение развивает силу ног и кардио.',
        time: 30,
        reps: 8,
        relax: 60,
        workoutId: 3,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Отжимания с колен',
        description:
          'Отжимания с опорой на колени. Это облегченный вариант классических отжиманий, который подходит для начинающих.',
        time: 30,
        reps: 6,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://www.iron-health.ru/wp-content/uploads/2015/03/Push-Up-4_92588747.jpg',
      },
      {
        name: 'Берпи',
        description:
          'Интенсивные берпи. Это упражнение сочетает кардио и силовую нагрузку, развивая общую физическую форму.',
        time: 30,
        reps: 5,
        relax: 60,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Планка с подъемом рук',
        description:
          'Лягте на живот, поднимите тело и руки поочередно. Это упражнение укрепляет мышцы кора и спины.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://wefit.ru/wp-content/uploads/2020/05/planka-s-povorotom-korpusa.jpeg',
      },
      {
        name: 'Выпады назад',
        description:
          'Шагните назад одной ногой и опуститесь, сгибая оба колена. Это упражнение развивает силу ног и равновесие.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1210548146/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%BE%D0%BD%D0%BA%D0%B8%D0%B9-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%BE%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D1%8B%D0%B5-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D1%81-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE.jpg?s=612x612&w=0&k=20&c=X0E2CoqclsmVmR9WHGR5Pv2MgDQUzX57OG2b4ub7dn0=',
      },
      {
        name: 'Обратные отжимания',
        description:
          'Сядьте на край стула, опустите тело вниз, сгибая локти. Это упражнение развивает трицепсы и грудные мышцы.',
        time: 30,
        reps: 6,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://kotsport.ru/wp-content/uploads/2023/12/obratnye-otzhimaniia-na-stule-1.webp',
      },
      {
        name: 'Русские скручивания',
        description:
          'Сидя, наклонитесь назад и скручивайтесь в стороны. Это упражнение эффективно тренирует косые мышцы живота.',
        time: 30,
        reps: 12,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://s-dt2.cloud.edgecore.ru/FSimageresizecache/app/uploads/public/648/d5b/27d/648d5b27dbc9e537590294__99999x99999.webp',
      },
      {
        name: 'Мостик с подъемом',
        description:
          'Лягте на спину, поднимите таз вверх. Удерживайте позицию несколько секунд, затем опустите таз обратно. Это упражнение развивает силу ягодиц и спины.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture: 'https://power-body.ru/wp-content/uploads/2017/05/39_600x362.jpg',
      },
      {
        name: 'Боковая планка',
        description:
          'Лягте на бок, поднимите тело на локте. Удерживайте позицию, напрягая боковые мышцы живота. Это упражнение укрепляет мышцы кора.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 3,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/bokovaya-planka/f7.jpg',
      },

      // Тренировка 4 (workoutId: 4)
      {
        name: 'Становая тяга',
        description:
          'Сделайте становую тягу с весом, держа штангу или гантели. Держите спину прямой и поднимайте вес, используя силу ног и ягодиц.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 4,
        isPublic: true,
        picture:
          'https://fitproject.ru/upload/medialibrary/a95/a957c6620e32574c883b85d59bf70c55.jpg',
      },
      {
        name: 'Жим лежа',
        description:
          'Жим штанги лежа на скамье. Убедитесь, что ваши ноги стоят на полу, а спина плотно прижата к скамье. Опускайте штангу к груди и поднимайте обратно.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 4,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Тяга в наклоне',
        description:
          'Тяга штанги в наклоне. Согните колени и наклоните корпус вперед, держа спину прямой. Поднимайте штангу к поясу, используя силу спины и рук.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 4,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },
      {
        name: 'Подъем на бицепс',
        description:
          'Подъем гантелей на бицепс. Держите локти близко к телу и поднимайте гантели к плечам, напрягая бицепсы. Опускайте обратно в исходное положение.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 4,
        isPublic: true,
        picture:
          'https://img.freepik.com/premium-photo/young-woman-is-exercising-with-dumbbells-home_231208-13651.jpg',
      },
      {
        name: 'Французский жим',
        description:
          'Французский жим с гантелями для трицепсов. Лягте на спину, держа гантели над головой. Опустите их за голову, сгибая локти, затем вернитесь в исходное положение.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 4,
        isPublic: true,
        picture:
          'https://avatars.dzeninfra.ru/get-zen_doc/15270/pub_5a138ac63dceb71462f9b37a_5a138add8c8be3bfd4f17c9d/scale_1200',
      },

      // Тренировка 5 (workoutId: 5)
      {
        name: 'Скручивания',
        description:
          'Лягте на спину и поднимите локти к коленям, напрягая пресс. Убедитесь, что поясница остается на полу, а движение идет за счет мышц живота.',
        time: 30,
        reps: 14,
        relax: 30,
        workoutId: 5,
        isPublic: true,
        picture:
          'https://kotsport.ru/wp-content/uploads/2023/12/skruchivaniia-s-vytianutymi-nogami-1.webp',
      },
      {
        name: 'Планка с вращением',
        description:
          'Удерживайте планку и вращайте тело в стороны, касаясь пола рукой. Это упражнение развивает силу и гибкость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 5,
        isPublic: true,
        picture:
          'https://wefit.ru/wp-content/uploads/2020/05/planka-s-povorotom-korpusa.jpeg',
      },
      {
        name: 'Скручивания с весом',
        description:
          'Скручивания с дополнительным весом для увеличения нагрузки. Держите вес на груди или над головой, выполняя скручивания.',
        time: 30,
        reps: 14,
        relax: 30,
        workoutId: 5,
        isPublic: true,
        picture:
          'https://lifehacker.ru/wp-content/uploads/2021/09/Kak-delat-russkie-skruchivaniya-chtoby-ukrepit-press-i-ne-navredit-spine_1631386384.jpg',
      },
      {
        name: 'Подъем ног',
        description:
          'Лягте на спину и поднимите ноги вверх, удерживая их прямыми. Это упражнение эффективно тренирует нижние мышцы живота.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 5,
        isPublic: true,
        picture: 'https://power-body.ru/wp-content/uploads/2017/05/39_600x362.jpg',
      },
      {
        name: 'Боковые скручивания',
        description:
          'Скручивания в стороны для косых мышц. Лягте на спину и поднимите плечи к коленям, вращая тело в стороны.',
        time: 30,
        reps: 14,
        relax: 30,

        workoutId: 5,
        isPublic: true,
        picture:
          'https://kotsport.ru/wp-content/uploads/2023/12/skruchivaniia-s-vytianutymi-nogami-1.webp',
      },

      // Тренировка 6 (workoutId: 6)
      {
        name: 'Скакалка',
        description:
          'Прыжки на скакалке для кардио. Держите руки на уровне талии и прыгайте, стараясь не приземляться на пятки. Это упражнение отлично развивает выносливость и координацию.',
        time: 60,
        reps: 1,
        relax: 30,
        workoutId: 6,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/188/1883295/large.jpg',
      },
      {
        name: 'Бег на месте',
        description:
          'Бегите на месте с высокими коленями. Поднимайте колени как можно выше, стараясь поддерживать ритм. Это упражнение активно задействует сердечно-сосудистую систему.',
        time: 60,
        reps: 1,
        relax: 30,
        workoutId: 6,
        isPublic: true,
        picture: 'https://marathonec.ru/wp-content/uploads/2020/04/beg-na-meste-doma.jpg',
      },
      {
        name: 'Конькобежный прыжок',
        description:
          'Сделайте прыжок в сторону, как на коньках. Прыгните вбок, приземляясь в приседе. Это упражнение развивает силу ног и координацию.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 6,
        isPublic: true,
        picture: 'https://i.redd.it/qbz0wl0bzyi51.jpg',
      },
      {
        name: 'Прыжки в стороны',
        description:
          'Прыжки в стороны с приземлением в присед. Прыгните вбок, приземляясь в приседе на одной ноге, затем вернитесь в исходное положение. Это упражнение развивает силу и выносливость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 6,
        isPublic: true,
        picture: 'https://1gai.ru/uploads/posts/2020-07/1595757614_12.jpg',
      },
      {
        name: 'Прыжки с разворотом',
        description:
          'Прыжки с поворотом на 180 градусов. Прыгните и развернитесь, приземляясь в исходное положение. Это упражнение развивает координацию и силу ног.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 6,
        isPublic: true,
        picture: 'https://1gai.ru/uploads/posts/2020-07/1595757614_12.jpg',
      },

      // Тренировка 7 (workoutId: 7)
      {
        name: 'Махи гирей',
        description:
          'Махи гирей для тренировки всего тела. Держите гирю обеими руками, наклоняйтесь вперед и поднимайте гирю до уровня груди, используя силу ног и бедер.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 7,
        isPublic: true,
        picture: 'https://shape.ru/images/fitnes/silovoj-trening/butt_butt/ketlbell.jpeg',
      },
      {
        name: 'Тяга к подбородку',
        description:
          'Тяга гантели к подбородку. Держите гантели перед собой и поднимайте их к подбородку, сгибая локти. Это упражнение развивает мышцы спины и плеч.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 7,
        isPublic: true,
        picture:
          'https://fitnavigator.ru/wp-content/uploads/2015/12/tjaga-k-podborodku-gantelej_1.jpg',
      },
      {
        name: 'Становая тяга с гантелями',
        description:
          'Становая тяга с двумя гантелями. Держите гантели в руках, наклоняйтесь вперед, сохраняя спину прямой, и поднимайте гантели, используя силу ног и бедер.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 7,
        isPublic: true,
        picture:
          'https://fitproject.ru/upload/medialibrary/a95/a957c6620e32574c883b85d59bf70c55.jpg',
      },
      {
        name: 'Жим над головой',
        description:
          'Жим гантелей над головой. Сидя или стоя, поднимайте гантели над головой, сохраняя спину прямой. Это упражнение развивает плечи и трицепсы.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 7,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2022-08/1661334809_1-sportishka-com-p-zhim-gantelei-nad-golovoi-stoya-krasivo-2.jpg',
      },
      {
        name: 'Планка с подъемом ноги',
        description:
          'Удерживайте планку, поднимая ноги поочередно. Это упражнение укрепляет мышцы кора и развивает равновесие.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 7,
        isPublic: true,
        picture:
          'https://images.thevoicemag.ru/upload/img_cache/055/055ad1d72a171527aaca8ba06027bf0f_cropped_510x237.jpg',
      },

      // Тренировка 8 (workoutId: 8)
      {
        name: 'Махи гирей',
        description:
          'Комплекс упражнений с гирями. Выполняйте различные упражнения, включая махи, приседания и жимы, чтобы развить силу и выносливость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 8,
        isPublic: true,
        picture: 'https://shape.ru/images/fitnes/silovoj-trening/butt_butt/ketlbell.jpeg',
      },
      {
        name: 'Плиометрика',
        description:
          'Упражнения на взрывную силу. Выполняйте прыжки и быстрые движения для развития силы и скорости.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 8,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Упражнение с эспандером',
        description:
          'Комплекс упражнений с эспандером. Используйте эспандер для выполнения различных силовых упражнений, таких как жимы и тяги.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 8,
        isPublic: true,
        picture: 'https://1gai.ru/uploads/posts/2021-12/1639720978_4.jpg',
      },
      {
        name: 'Приседания с отягощением',
        description:
          'Приседания с дополнительным весом для развития силы. Используйте утяжелители на ногах или жилет для увеличения нагрузки.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 8,
        isPublic: true,
        picture: 'https://shape.ru/images/fitnes/silovoj-trening/squat1.jpg',
      },
      {
        name: 'Тяга к поясу',
        description:
          'Тяга гантели к поясу в наклоне. Наклонитесь вперед, держа гантели, и поднимайте их к поясу, используя силу спины.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 8,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },

      // Тренировка 9 (workoutId: 9)
      {
        name: 'Скалолазание',
        description: 'Подтягивание бедер к груди из положения планка.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 9,
        isPublic: true,
        picture: 'https://img.championat.com/i/n/d/1643019792613740193.jpg',
      },
      {
        name: 'Бег на месте с высокими коленями',
        description:
          'Бег на месте, поднимая колени высоко. Это упражнение развивает кардио и укрепляет ноги.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 9,
        isPublic: true,
        picture: 'https://marathonec.ru/wp-content/uploads/2020/04/beg-na-meste-doma.jpg',
      },
      {
        name: 'Прыжки через скакалку',
        description:
          'Прыжки через скакалку для кардио. Удерживайте ритм и старайтесь не приземляться на пятки.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 9,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/188/1883295/large.jpg',
      },
      {
        name: 'Скручивания на фитболе',
        description:
          'Скручивания на фитболе для тренировки пресса. Лягте на фитбол, поднимайте плечи к коленям, удерживая баланс.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 9,
        isPublic: true,
        picture:
          'https://musclefit.info/wp-content/uploads/2021/10/skruchivaniya-fitbole-min.jpg',
      },
      {
        name: 'Махи с гантелями',
        description:
          'Махи с гантелями для развития силы. Используйте различные упражнения для развития силы и выносливости.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 9,
        isPublic: true,
        picture: 'https://shape.ru/images/fitnes/silovoj-trening/butt_butt/ketlbell.jpeg',
      },

      // Тренировка 10 (workoutId: 10)
      {
        name: 'Приседания с весом',
        description:
          'Сделайте приседания с утяжелением, держа гантели или штангу на плечах. Следите за тем, чтобы колени не выходили за линию носков, а спина оставалась ровной.',
        time: 30,
        reps: 12,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://fitnavigator.ru/wp-content/uploads/2020/02/prisedaniya-s-gantelyami_01.jpg',
      },
      {
        name: 'Отжимания',
        description:
          'Классические отжимания от пола. Убедитесь, что ваше тело формирует прямую линию от головы до пяток. Опускайтесь до уровня груди и возвращайтесь в исходное положение.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1311342098/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B5%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=flTXZfPbkfBnjG3ug-1PtIFEb9njno0U8kFZMF_BVOY=',
      },
      {
        name: 'Берпи',
        description:
          'Сделайте берпи для кардио нагрузки. Начните с приседа, затем прыгните в планку, вернитесь в присед и выполните прыжок вверх. Это упражнение развивает силу и выносливость.',
        time: 30,
        reps: 8,
        relax: 60,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Планка',
        description:
          'Удерживайте тело на локтях. Держите спину прямой и напрягите мышцы живота. Это упражнение укрепляет мышцы кора и спины.',
        time: 40,
        reps: 1,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1311342098/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B5%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=flTXZfPbkfBnjG3ug-1PtIFEb9njno0U8kFZMF_BVOY=',
      },
      {
        name: 'Выпады с весом',
        description:
          'Шагните вперед одной ногой и опуститесь с весом. Убедитесь, что переднее колено не выходит за линию носка. Это упражнение развивает силу ног.',
        time: 30,
        reps: 12,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture: 'https://getgoodfit.com/wp-content/uploads/2015/09/KBLunge_1.jpg',
      },
      {
        name: 'Обратные отжимания',
        description:
          'Сядьте на край стула, опустите тело вниз, сгибая локти. Держите локти близко к телу и возвращайтесь в исходное положение, используя силу трицепсов.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://kotsport.ru/wp-content/uploads/2023/12/obratnye-otzhimaniia-na-stule-1.webp',
      },
      {
        name: 'Русские скручивания с весом',
        description:
          'Сидя, наклонитесь назад и скручивайтесь с весом. Это упражнение эффективно тренирует косые мышцы, а также улучшает гибкость.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://s-dt2.cloud.edgecore.ru/FSimageresizecache/app/uploads/public/648/d5b/27d/648d5b27dbc9e537590294__99999x99999.webp',
      },
      {
        name: 'Мостик с поднятием ноги',
        description:
          'Лягте на спину и поднимите таз одной ногой. Это упражнение развивает силу ягодиц и мышц ног.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://bodybuilding-and-fitness.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/mostik-na-odnoy-noge-870x400.jpg.webp',
      },
      {
        name: 'Боковая планка с поднятой ногой',
        description:
          'Лягте на бок, поднимите тело и одну ногу. Удерживайте позицию, напрягая боковые мышцы живота и ягодиц.',
        time: 20,
        reps: 1,
        relax: 30,
        workoutId: 10,
        isPublic: true,
        picture:
          'https://img.championat.com/s/732x488/news/big/w/p/bokovaya-planka-osobennosti-i-tehnika-vypolneniya_17271796381008003503.jpg',
      },

      // Тренировка 11 (workoutId: 11)
      {
        name: 'Присед сумо',
        description: 'Приседайте с широкой постановкой стоп.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 11,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2022-11/1667452377_1-sportishka-com-p-prised-sumo-s-gantelei-vkontakte-1.jpg',
      },
      {
        name: 'Скручивания с утяжелением',
        description:
          'Скручивания с дополнительным весом для пресса. Убедитесь, что поясница остается на полу, а движение идет за счет мышц живота.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 11,
        isPublic: true,
        picture:
          'https://img.championat.com/s/732x488/news/big/w/p/bokovaya-planka-osobennosti-i-tehnika-vypolneniya_17271796381008003503.jpg',
      },
      {
        name: 'Планка с подъемом руки и ноги',
        description:
          'Удерживайте планку, поднимая руку и ногу. Это упражнение укрепляет мышцы кора и развивает равновесие.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 11,
        isPublic: true,
        picture:
          'https://img.championat.com/s/732x488/news/big/w/p/bokovaya-planka-osobennosti-i-tehnika-vypolneniya_17271796381008003503.jpg',
      },
      {
        name: 'Становая тяга с гантелями',
        description:
          'Становая тяга с двумя гантелями. Держите гантели в руках, наклоняйтесь вперед, сохраняя спину прямой, и поднимайте гантели, используя силу ног и бедер.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 11,
        isPublic: true,
        picture:
          'https://fitproject.ru/upload/medialibrary/a95/a957c6620e32574c883b85d59bf70c55.jpg',
      },
      {
        name: 'Жим лежа с гантелями',
        description:
          'Жим гантелей лежа на скамье. Убедитесь, что ваши ноги стоят на полу, а спина плотно прижата к скамье. Опускайте гантели к груди и поднимайте обратно.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 11,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },

      // Тренировка 12 (workoutId: 12)
      {
        name: 'Выпады с жимом гири вверх',
        description: 'Выпад с шагом назад с жимом гири вверх.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 12,
        isPublic: true,
        picture: 'https://getgoodfit.com/wp-content/uploads/2015/09/KBLunge_1.jpg',
      },
      {
        name: 'Прыжок в планке',
        description: 'Выполните подтягивания ног в прыжке из позиции планка',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 12,
        isPublic: true,
        picture:
          'https://bodybuilding-and-fitness.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/pryzhki-v-planke.png.webp',
      },
      {
        name: 'Присед с эспандером',
        description:
          'Выполняйте приседания, утяжелив их натяжением эспандером через стопы',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 12,
        isPublic: true,
        picture: 'https://1gai.ru/uploads/posts/2021-12/1639720978_4.jpg',
      },
      {
        name: 'Отжимания с колен',
        description: 'Выполняйте отжимания с опорой на колени',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 12,
        isPublic: true,
        picture:
          'https://www.iron-health.ru/wp-content/uploads/2015/03/Push-Up-4_92588747.jpg',
      },
      {
        name: 'Тяга к поясу с эспандером',
        description:
          'Тяга эспандера к поясу. Закрепите эспандер на уровне пояса и тяните его к себе, сгибая локти. Это упражнение развивает мышцы спины и рук.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 12,
        isPublic: true,
        picture:
          'https://www.flex-sport.ru/upload/resize_cache/webp/upload/medialibrary/aa8/ma5la65lxljdahtk5iv4fvy0sbv6b5u7.webp',
      },
      // Тренировка 12 (workoutId: 12)

      // Тренировка 13 (workoutId: 13)
      {
        name: 'Упражнение для верхней части тела',
        description:
          'Упражнения для тренировки мышц верхней части тела. Эта тренировка включает в себя жимы, тяги и другие упражнения, которые помогут укрепить грудные, плечевые и спинные мышцы.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 13,
        isPublic: true,
        picture:
          'https://img.freepik.com/premium-photo/young-woman-is-exercising-with-dumbbells-home_231208-13651.jpg',
      },
      {
        name: 'Тяга штанги к поясу',
        description:
          'Тяга штанги к поясу для тренировки спины. Это упражнение помогает развивать силу и массу мышц спины, а также улучшает осанку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 13,
        isPublic: true,
        picture:
          'https://fitnavigator.ru/wp-content/uploads/2016/06/stanovaja-tjaga-s-ganteljami_9.jpg',
      },
      {
        name: 'Жим гантелей на наклонной скамье',
        description:
          'Жим гантелей на наклонной скамье для груди. Это упражнение активно задействует верхнюю часть грудных мышц и помогает развивать силу рук.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 13,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Французский жим с гантелями',
        description:
          'Французский жим для трицепсов. Это упражнение эффективно развивает трицепсы и помогает улучшить общую силу верхних конечностей.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 13,
        isPublic: true,
        picture:
          'https://avatars.dzeninfra.ru/get-zen_doc/15270/pub_5a138ac63dceb71462f9b37a_5a138add8c8be3bfd4f17c9d/scale_1200',
      },
      {
        name: 'Планка с отжиманием',
        description:
          'Планка с выполнением отжиманий. Это упражнение сочетает в себе элементы силовой тренировки и кардио, что делает его эффективным для укрепления мышц кора.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 13,
        isPublic: true,
        picture:
          'https://bodybuilding-and-fitness.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/08/pryzhki-v-planke.png.webp',
      },

      // Тренировка 14 (workoutId: 14)

      // Тренировка 15 (workoutId: 15)
      {
        name: 'Берпи',
        description:
          'Интенсивная тренировка с элементами кроссфита. Эта тренировка включает в себя высокоинтенсивные упражнения, которые развивают силу и выносливость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Упражнение с гирями',
        description:
          'Комплекс упражнений с гирями. Эти упражнения помогут развить силу и выносливость, а также улучшить координацию движений.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },
      {
        name: 'Упражнения с эспандером',
        description:
          'Упражнения с эспандером для силовой тренировки. Эти упражнения помогут развить силу и гибкость, а также могут быть выполнены в любом месте.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2023-03/1678224099_sportishka-com-p-prisedaniya-s-rezinkoi-sport-krasivo-41.jpg',
      },
      {
        name: 'Плиометрика',
        description:
          'Упражнения на взрывную силу. Эти тренировки помогают развить скорость и мощность, что полезно для большинства видов спорта.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Берпи',
        description:
          'Упражнения для повышения выносливости. Эти тренировки помогут улучшить сердечно-сосудистую систему и общую физическую подготовку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },

      // Тренировка 16 (workoutId: 16)
      {
        name: 'Плиометрика',
        description:
          'Упражнения на взрывную силу. Эти тренировки помогают развить скорость и мощность, что полезно для большинства видов спорта.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Становая тяга',
        description:
          'Становая тяга с весом. Это упражнение помогает развивать силу и массу мышц спины, а также улучшает осанку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 16,
        isPublic: true,
        picture:
          'https://fitproject.ru/upload/medialibrary/a95/a957c6620e32574c883b85d59bf70c55.jpg',
      },
      {
        name: 'Плиометрика',
        description:
          'Упражнения на взрывную силу. Эти тренировки помогают развить скорость и мощность, что полезно для большинства видов спорта.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 15,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Жим гантелей',
        description:
          'Жим гантелей на горизонтальной скамье. Это упражнение помогает развивать силу и массу грудных мышц.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 17,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Подъем на носки',
        description:
          'Подъем на носки для тренировки икр. Это упражнение помогает укрепить икроножные мышцы и улучшить их выносливость.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 16,
        isPublic: true,
        picture: 'https://www.sportiwno.ru/upload/exercises/1464488032.jpg',
      },

      // Тренировка 17 (workoutId: 17)
      {
        name: 'Становая тяга',
        description:
          'Становая тяга с весом. Это упражнение помогает развивать силу и массу мышц спины, а также улучшает осанку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 16,
        isPublic: true,
        picture:
          'https://fitproject.ru/upload/medialibrary/a95/a957c6620e32574c883b85d59bf70c55.jpg',
      },
      {
        name: 'Жим гантелей',
        description:
          'Жим гантелей на горизонтальной скамье. Это упражнение помогает развивать силу и массу грудных мышц.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 17,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Тяга в наклоне',
        description:
          'Тяга штанги в наклоне. Это упражнение эффективно развивает мышцы спины и помогает улучшить осанку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 17,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },
      {
        name: 'Разведения гантелей',
        description:
          'Разведения гантелей для тренировки плеч. Это упражнение помогает развивать дельтовидные мышцы и улучшает общую силу верхней части тела.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 17,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2022-11/1667543866_31-sportishka-com-p-razvedenie-ruk-s-gantelyami-lezha-krasivo-37.jpg',
      },
      {
        name: 'Французский жим',
        description:
          'Французский жим с гантелями для трицепсов. Это упражнение эффективно развивает трицепсы и помогает улучшить общую силу верхних конечностей.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 17,
        isPublic: true,
        picture:
          'https://avatars.dzeninfra.ru/get-zen_doc/15270/pub_5a138ac63dceb71462f9b37a_5a138add8c8be3bfd4f17c9d/scale_1200',
      },

      // Тренировка 18 (workoutId: 18)
      {
        name: 'Берпи',
        description:
          'Интенсивная кардио тренировка. Эти упражнения помогут развить выносливость и укрепить сердечно-сосудистую систему.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 18,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Бег на беговой дорожке',
        description:
          'Бег на беговой дорожке с изменением скорости. Это упражнение помогает развивать выносливость и сжигать калории.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 18,
        isPublic: true,
        picture:
          'https://beg-dorozhki.ru/published/publicdata/BEGOVI86WA/attachments/SC/images/22%D0%B4%D0%BE%D1%80%D0%BE%D0%B6%D0%BA%D0%B0.jpg',
      },
      {
        name: 'Велосипед',
        description:
          'Это упражнение помогает развивать выносливость и укреплять мышцы ног.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 18,
        isPublic: true,
        picture:
          'https://s-dt2.cloud.edgecore.ru/FSimageresizecache/app/uploads/public/649/81f/630/64981f630bc91728326692__99999x99999.webp',
      },
      {
        name: 'Прыжки на месте',
        description:
          'Прыжки на месте для повышения пульса. Это упражнение помогает развивать кардио и укреплять ноги.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 18,
        isPublic: true,
        picture: 'https://marathonec.ru/wp-content/uploads/2020/04/beg-na-meste-doma.jpg',
      },
      {
        name: 'Скакалка',
        description:
          'Прыжки на скакалке для кардио. Это упражнение помогает развивать выносливость и координацию.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 18,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/188/1883295/large.jpg',
      },

      // Тренировка 19 (workoutId: 19)
      {
        name: 'Упражнение на гибкость',
        description:
          'Комплекс упражнений на растяжку и гибкость. Эти упражнения помогут улучшить подвижность суставов и предотвратить травмы.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 19,
        isPublic: true,
        picture:
          'https://ihels.ru/storage/material_images/213772/Top-100-uprazhnenij-dlya-rastyazhki-i-uluchsheniya-gibkosti-tela.-Gotovyj-plan-rastyazhki-na-8-dnej-1.jpg',
      },
      {
        name: 'Растяжка для спины',
        description:
          'Упражнения для растяжки спины. Эти растяжки помогут снять напряжение и улучшить гибкость спинных мышц.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 19,
        isPublic: true,
        picture: 'https://www.bolivspine.by/upload/iblock/uslugi/2005.jpg',
      },
      {
        name: 'Растяжка для ног',
        description:
          'Упражнения для растяжки ног. Эти растяжки помогут расслабить мышцы ног и улучшить их гибкость, что важно для предотвращения травм.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 19,
        isPublic: true,
        picture:
          'https://images.thevoicemag.ru/upload/img_cache/d4f/d4fe28e78d28aa4e4f40f00f6af9e12e_cropped_666x531.jpg',
      },
      {
        name: 'Растяжка для рук',
        description:
          'Упражнения для растяжки рук. Эти растяжки помогут улучшить гибкость и снять напряжение в мышцах рук и плеч.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 19,
        isPublic: true,
        picture:
          'https://s0.rbk.ru/v6_top_pics/resized/1005xH/media/img/0/43/755979524790430.jpg',
      },
      {
        name: 'Растяжка для всего тела',
        description:
          'Комплексная растяжка для всего тела. Эти упражнения помогут улучшить общую гибкость и расслабить все основные группы мышц.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 19,
        isPublic: true,
        picture:
          'https://lh3.googleusercontent.com/proxy/0-NegQ6r2OnYsKDBB30LK83mM5uPdBH-xo1lcIRGLNnY8mGUbS0z3hSn5z3wD0vY6VdjEaoqrE5BXCHMIRhXSi7RNHzl98I1fBWSUmeXdQrPArZe',
      },

      // Тренировка 20 (workoutId: 20)
      {
        name: 'Берпи',
        description:
          'Интенсивная тренировка с элементами кроссфита. Эта тренировка включает в себя высокоинтенсивные упражнения, которые развивают силу и выносливость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 20,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Упражнение с гирями',
        description:
          'Комплекс упражнений с гирями. Эти упражнения помогут развить силу и выносливость, а также улучшить координацию движений.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 20,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1210548146/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D0%BE%D0%BD%D0%BA%D0%B8%D0%B9-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D0%BE%D1%8F%D0%B7%D1%8B%D1%87%D0%BD%D1%8B%D0%B5-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D0%B2%D1%8B%D0%BF%D0%B0%D0%B4%D1%8B-%D1%81-%D0%B3%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE.jpg?s=612x612&w=0&k=20&c=X0E2CoqclsmVmR9WHGR5Pv2MgDQUzX57OG2b4ub7dn0=',
      },
      {
        name: 'Плиометрика',
        description:
          'Упражнения на взрывную силу. Эти тренировки помогают развить скорость и мощность, что полезно для большинства видов спорта.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 20,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Берпи',
        description:
          'Упражнения для повышения выносливости. Эти тренировки помогут улучшить сердечно-сосудистую систему и общую физическую подготовку, что особенно важно для активного образа жизни.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 20,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Силовая упражнение для ног',
        description:
          'Комплекс упражнений для тренировки ног. Упражнения направлены на развитие силы и выносливости мышц ног, что поможет улучшить общую физическую форму.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 20,
        isPublic: true,
        picture: 'https://pics.livejournal.com/meet2fit/pic/00107ya8',
      },

      // Тренировка 21 (workoutId: 21)
      {
        name: 'Тяга к поясу с гантелями',
        description:
          'Тяга гантелей к поясу в наклоне. Это упражнение помогает развивать мышцы спины и улучшает осанку, а также способствует укреплению кора.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 21,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },
      {
        name: 'Жим штанги лежа',
        description:
          'Жим штанги лежа на скамье. Это классическое упражнение развивает грудные, плечевые и трицепсы, улучшая общую силу верхней части тела.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 21,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Подъем на носки с весом',
        description:
          'Подъем на носки с дополнительным весом. Это упражнение эффективно развивает икроножные мышцы и помогает улучшить баланс и координацию.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 21,
        isPublic: true,
        picture: 'https://power-body.ru/wp-content/uploads/2017/05/39_600x362.jpg',
      },
      {
        name: 'Планка на фитболе',
        description:
          'Удерживайте планку на фитболе. Это упражнение помогает укрепить мышцы кора и развивает баланс, делая тренировку более эффективной.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 21,
        isPublic: true,
        picture:
          'https://img0.liveinternet.ru/images/attach/c/10/110/768/110768350_3720816_planka2.jpg',
      },
      {
        name: 'Скручивания на фитболе',
        description:
          'Скручивания на фитболе для тренировки пресса. Это упражнение помогает эффективно развивать мышцы живота и улучшает гибкость.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 21,
        isPublic: true,
        picture:
          'https://musclefit.info/wp-content/uploads/2021/10/skruchivaniya-fitbole-min.jpg',
      },

      // Тренировка 22 (workoutId: 22)
      {
        name: 'Упражнение с гирями',
        description:
          'Упражнение с гирями. Эти упражнения помогают развить силу, выносливость и координацию, а также активируют множество мышечных групп.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 22,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Плиометрика с отягощением',
        description:
          'Плиометрика с использованием веса для увеличения нагрузки. Это упражнение помогает развить взрывную силу и скорость, что полезно для большинства видов спорта.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 22,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/172/1729010/large.jpg',
      },
      {
        name: 'Упражнение с эспандером',
        description:
          'Комплекс упражнений с эспандером. Эти упражнения помогают развить силу и гибкость, а также могут быть выполнены в любом месте, что делает их удобными для тренировок.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 22,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2023-03/1678224099_sportishka-com-p-prisedaniya-s-rezinkoi-sport-krasivo-41.jpg',
      },
      {
        name: 'Силовая тренировка для ног',
        description:
          'Комплекс упражнений для тренировки ног. Эти упражнения помогут улучшить силу и выносливость мышц ног, что особенно важно для активного образа жизни.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 22,
        isPublic: true,
        picture:
          'https://www.flex-sport.ru/upload/resize_cache/webp/upload/medialibrary/d16/qjko32e3x118tbfet2hcl39q0m1mcwvz.webp',
      },
      {
        name: 'Тяга к поясу',
        description:
          'Тяга гантели к поясу в наклоне. Это упражнение помогает развивать мышцы спины и улучшает осанку, а также способствует укреплению кора.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 22,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },

      // Тренировка 23 (workoutId: 23)
      {
        name: 'Берпи',
        description:
          'Комплексная тренировка с несколькими упражнениями. Эта тренировка помогает развивать силу и выносливость, а также улучшает общую физическую подготовку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 23,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },
      {
        name: 'Бег на месте с высокими коленями',
        description:
          'Бег на месте, поднимая колени высоко. Это упражнение помогает развивать кардио и укрепляет ноги, улучшая общую физическую форму.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 23,
        isPublic: true,
        picture: 'https://marathonec.ru/wp-content/uploads/2020/04/beg-na-meste-doma.jpg',
      },
      {
        name: 'Прыжки через скакалку',
        description:
          'Прыжки через скакалку для кардио. Это упражнение помогает развивать выносливость и координацию, а также сжигать калории.',
        time: 30,
        reps: 1,
        relax: 30,
        workoutId: 23,
        isPublic: true,
        picture: 'https://ss.sport-express.ru/userfiles/materials/188/1883295/large.jpg',
      },
      {
        name: 'Скручивания на фитболе',
        description:
          'Скручивания на фитболе для тренировки пресса. Это упражнение эффективно развивает мышцы живота и помогает улучшить гибкость.',
        time: 30,
        reps: 15,
        relax: 30,
        workoutId: 23,
        isPublic: true,
        picture:
          'https://musclefit.info/wp-content/uploads/2021/10/skruchivaniya-fitbole-min.jpg',
      },
      {
        name: 'Берпи',
        description:
          'Интенсивная тренировка с элементами кроссфита. Эта тренировка включает в себя высокоинтенсивные упражнения, которые развивают силу и выносливость.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 23,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1419462881/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D0%BF%D0%BE-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%B1%D1%83%D1%80%D0%BF%D0%B8.jpg?s=612x612&w=0&k=20&c=TzEreSBG86EXZ6oObYg45O4NKc2n5Np-Txq-nW00FJE=',
      },

      // Тренировка 24 (workoutId: 24)
      {
        name: 'Силовая тренировка для верхней части тела',
        description:
          'Упражнения для тренировки мышц верхней части тела. Эти тренировки помогут укрепить грудные, плечевые и спинные мышцы, а также развить общую силу.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 24,
        isPublic: true,
        picture:
          'https://media.istockphoto.com/id/1311342098/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B5%D0%B6%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%B0%D1%8F-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=flTXZfPbkfBnjG3ug-1PtIFEb9njno0U8kFZMF_BVOY=',
      },
      {
        name: 'Жим гантелей',
        description:
          'Жим гантелей на горизонтальной скамье. Это упражнение помогает развивать силу и массу грудных мышц.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 24,
        isPublic: true,
        picture:
          'https://bodymaster.ru/media/uploads/1/uprazhneniya/gim_gantelei_lega/f14.jpeg',
      },
      {
        name: 'Тяга в наклоне',
        description:
          'Тяга штанги в наклоне. Это упражнение эффективно развивает мышцы спины и помогает улучшить осанку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 24,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },
      {
        name: 'Разведения гантелей',
        description:
          'Разведения гантелей для тренировки плеч. Это упражнение помогает развивать дельтовидные мышцы и улучшает общую силу верхней части тела.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 24,
        isPublic: true,
        picture: 'https://opis-cdn.tinkoffjournal.ru/mercury/dumbbell-flyes__in-out.jpg',
      },
      {
        name: 'Французский жим',
        description:
          'Французский жим с гантелями для трицепсов. Это упражнение эффективно развивает трицепсы и помогает улучшить общую силу верхних конечностей.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 24,
        isPublic: true,
        picture:
          'https://avatars.dzeninfra.ru/get-zen_doc/15270/pub_5a138ac63dceb71462f9b37a_5a138add8c8be3bfd4f17c9d/scale_1200',
      },

      // Тренировка 26 (workoutId: 26)

      // Тренировка 27 (workoutId: 27)
      {
        name: 'Упражнение для верхней части тела',
        description:
          'Упражнения для тренировки мышц верхней части тела. Эти тренировки помогут укрепить грудные, плечевые и спинные мышцы, а также развить общую силу.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 14,
        isPublic: true,
        picture: 'https://opis-cdn.tinkoffjournal.ru/mercury/dumbbell-flyes__in-out.jpg',
      },
      {
        name: 'Жим гантелей',
        description:
          'Жим гантелей. Это упражнение помогает развивать силу и массу грудных мышц.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 14,
        isPublic: true,
        picture:
          'https://www.mentoday.ru/upload/img_cache/42b/42b13dc22e1736279fccd0f6f3dfcc2e_cropped_666x485.jpg',
      },
      {
        name: 'Тяга в наклоне',
        description:
          'Тяга штанги в наклоне. Это упражнение эффективно развивает мышцы спины и помогает улучшить осанку.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 14,
        isPublic: true,
        picture:
          'https://fitneszon.ru/wp-content/uploads/2018/04/Tyaga-dvuh-gantelej-k-poyasu.jpg',
      },
      {
        name: 'Разведения гантелей',
        description:
          'Разведения гантелей для тренировки плеч. Это упражнение помогает развивать дельтовидные мышцы и улучшает общую силу верхней части тела.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 14,
        isPublic: true,
        picture:
          'https://sportishka.com/uploads/posts/2022-11/1667492712_12-sportishka-com-p-razvedenie-ruk-v-naklone-s-gantelyami-kras-12.jpg',
      },
      {
        name: 'Французский жим',
        description:
          'Французский жим с гантелями для трицепсов. Это упражнение эффективно развивает трицепсы и помогает улучшить общую силу верхних конечностей.',
        time: 30,
        reps: 10,
        relax: 30,
        workoutId: 14,
        isPublic: true,
        picture:
          'https://avatars.dzeninfra.ru/get-zen_doc/15270/pub_5a138ac63dceb71462f9b37a_5a138add8c8be3bfd4f17c9d/scale_1200',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Exercises', null, {});
  },
};
