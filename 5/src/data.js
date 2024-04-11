import { getRandomAvatar, getRandomPostImage } from "./utils";

const postsData = [
  {
    id: 1,
    title: `Разработчики заблокировали «хардкорного» грифера Tinyviolin в WoW Classic`,
    description: `После относительного успеха по внедрению в состав сильнейшей гильдии "Хардкорного" WoW Classic – HC Elite и убийству основных персонажей части рейдеров во время прохождения Храма Ан'киража грифер Tinyviolin и не подумал останавливаться, а потому тотчас принялся за подготовку "Дня правосудия 3.0"`,
    url: `#`,
    votes: 17,
    avatar: getRandomAvatar(),
    postImage: getRandomPostImage(),
  },
  {
    id: 2,
    title: `Рейтинги бойцов, лекарей и танков в эпохальных+ подземельях после 14 недели 3 сезона Dragonflight`,
    description: `Завершается 14 неделя 3 сезона Dragonflight, на которой отважные бойцы, танки и лекари посещали подземелья эпохального+ режима. `,
    url: `#`,
    votes: 11,
    avatar: getRandomAvatar(),
    postImage: getRandomPostImage(),
  },
  {
    id: 3,
    title: `Разработчики WoW Classic в деталях рассказали о работе системы «шардов» и «слоев»`,
    description: `Одна из самых частых текущих жалоб от игроков "Сезона открытий" заключается в проблемах работы системы слоев и задержках во время события Кровавой луны в Тернистой долине. `,
    url: `#`,
    votes: 17,
    avatar: getRandomAvatar(),
    postImage: getRandomPostImage(),
  },
  {
    id: 4,
    title: `С выходом нового дополнения в Hearthstone будут доступны не все колоды Непревзойдённого Чудастера`,
    description: `19 марта в Hearthstone начнётся новый игровой год и одновременно с этим выйдет дополнение "Мастерская Чудастера". Сам Чудастер станет одной из нейтральных легендарных карт.`,
    url: `#`,
    votes: 9,
    avatar: getRandomAvatar(),
    postImage: getRandomPostImage(),
  },
];

export default postsData;