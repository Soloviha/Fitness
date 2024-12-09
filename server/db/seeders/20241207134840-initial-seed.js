'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        title: 'Польза регулярных тренировок',
        desc: 'Регулярные физические нагрузки помогают укрепить сердечно-сосудистую систему, улучшают обмен веществ и повышают уровень энергии. Исследования показывают, что занятия спортом не только улучшают физическую форму, но и способствуют улучшению психического здоровья.',
      },
      {
        title: 'Как выбрать идеальный спортзал',
        desc: 'При выборе спортзала обратите внимание на его месторасположение, доступность оборудования и наличие квалифицированных тренеров. Также важно учитывать часы работы и атмосферу — комфортная обстановка может значительно повысить вашу мотивацию.',
      },
      {
        title: 'Правильное питание для спортсменов',
        desc: 'Спортсменам необходимо сбалансированное питание, включающее углеводы, белки и жиры. Употребление сложных углеводов перед тренировкой обеспечит вас энергией, а белки помогут восстановить мышцы после нагрузки.',
      },
      {
        title: 'Лучшие упражнения для начинающих',
        desc: 'Для начинающих подойдут базовые упражнения, такие как приседания, отжимания и планка. Эти упражнения развивают основные группы мышц и помогают улучшить общую физическую форму.',
      },
      {
        title: 'Как избежать травм при тренировках',
        desc: 'Чтобы избежать травм, важно правильно разогреваться перед тренировкой и делать заминку после. Также следите за техникой выполнения упражнений и не перегружайте себя, особенно на начальном этапе.',
      },
      {
        title: 'Психология спорта: как настроиться на успех',
        desc: 'Ментальная подготовка играет ключевую роль в достижении спортивных целей. Визуализация успеха и позитивные аффирмации могут помочь вам преодолеть трудности и повысить уверенность в своих силах.',
      },
      {
        title: 'Топ-10 приложений для фитнеса',
        desc: 'Существует множество приложений, которые помогут вам отслеживать тренировки и прогресс. Приложения, такие как MyFitnessPal и Strava, позволяют вести дневник питания и записывать результаты пробежек.',
      },
      {
        title: 'Значение растяжки в тренировочном процессе',
        desc: 'Растяжка помогает улучшить гибкость и предотвратить травмы. Выполняйте растяжку после тренировки, чтобы расслабить мышцы и ускорить восстановление.',
      },
      {
        title: 'Секреты успешных марафонцев',
        desc: 'Успешные марафонцы уделяют внимание не только тренировкам, но и питанию, отдыху и ментальной подготовке. Правильный план тренировок и постепенное увеличение дистанции помогут вам подготовиться к марафону.',
      },
      {
        title: 'Как правильно дышать во время тренировки',
        desc: 'Правильное дыхание помогает улучшить выносливость и эффективность тренировок. Вдыхайте носом и выдыхайте ртом, старайтесь синхронизировать дыхание с движениями.',
      },
      {
        title: 'Спортивные гаджеты: что выбрать?',
        desc: 'Фитнес-трекеры и умные часы могут помочь отслеживать ваши тренировки и здоровье. Выбирайте устройства с функциями мониторинга сердечного ритма и GPS для более точного анализа.',
      },
      {
        title: 'Как составить тренировочный план',
        desc: 'Для создания эффективного тренировочного плана определите свои цели, уровень физической подготовки и доступное время. Включите разнообразные упражнения, чтобы избежать скуки и переутомления.',
      },
      {
        title: 'Влияние сна на спортивные результаты',
        desc: 'Качественный сон необходим для восстановления организма после тренировок. Недостаток сна может негативно сказаться на вашей производительности и концентрации.',
      },
      {
        title: 'Питательные вещества для восстановления после тренировки',
        desc: 'После тренировки важно восполнить запасы гликогена и восстановить мышцы. Употребление белкового коктейля или пищи с высоким содержанием белка в течение 30 минут после тренировки поможет ускорить восстановление.',
      },
      {
        title: 'Как заниматься спортом с друзьями',
        desc: 'Занятия спортом в компании друзей делают тренировки более увлекательными и мотивирующими. Попробуйте групповые занятия или совместные пробежки, чтобы поддерживать друг друга.',
      },
      {
        title: 'Спорт на свежем воздухе: преимущества и недостатки',
        desc: 'Занятия спортом на улице позволяют насладиться природой и свежим воздухом. Однако следите за погодными условиями и выбирайте безопасные места для тренировок.',
      },
      {
        title: 'Как поддерживать мотивацию в спорте',
        desc: 'Установите конкретные цели и отслеживайте свой прогресс. Найдите единомышленников и участвуйте в соревнованиях, чтобы поддерживать интерес к занятиям спортом.',
      },
      {
        title: 'Топ-5 видов спорта для похудения',
        desc: 'Бег, плавание, велоспорт, HIIT и танцы — это эффективные виды активности для сжигания калорий и похудения. Выбирайте тот вид спорта, который вам нравится, чтобы тренировки приносили удовольствие.',
      },
      {
        title: 'Как выбрать подходящий вид спорта',
        desc: 'При выборе вида спорта учитывайте свои интересы, физическую подготовку и цели. Попробуйте разные активности, чтобы найти ту, которая вам подходит.',
      },
      {
        title: 'Спортивные травмы: как с ними справляться',
        desc: 'Если вы получили травму, важно отдохнуть и дать организму время на восстановление. При необходимости обратитесь к врачу и следуйте его рекомендациям.',
      },
      {
        title: 'Роль витаминов и минералов в спорте',
        desc: 'Витамины и минералы играют важную роль в поддержании здоровья спортсменов. Обеспечьте разнообразное питание, чтобы получать необходимые микроэлементы для оптимальной работы организма.',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};