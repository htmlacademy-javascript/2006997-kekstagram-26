function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function checkStringLength(string, length) {
  return string.length <= length;
}



/*
id (ГОТОВО) число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.

url (ГОТОВО) строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes (ГОТОВО), число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются
случайным образом. Пример описания объекта с комментарием:
{
  id: 135, готово
  avatar: 'img/avatar-6.svg', готово
  message: 'В целом всё неплохо. Но не всё.', готово
  name: 'Артём' готово
}

У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения
из представленных ниже:

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.
*/


const NAME = [
  'Алексей',
  'Саша',
  'Николай',
  'Павел',
];
const MESSAGE = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const URL = function givRandomUrl (){
  let i = Math.round(Math.random() * (25 - 1) + 1);
  let link = "photos/" + i + ".jpg";
  return link;
};

const AVATAR = function givRandomAvatar(){
  let i = Math.round(Math.random() * (6 - 1) + 1);
  let link = "img/avatar-" + i + ".svg";
  return link;
}

const ID = function randomId(min, max) {
  min = 1;
  max = 25;
  return Math.floor(Math.random() * (max - min) + min)
};

const ID_COMMENTS = function randomIdComments(min, max) {
  min = 1;
  max = 50;
  return Math.floor(Math.random() * (max - min) + min)
};

const LIKES = function randomLikes(min, max) {
  min = 15;
  max = 200;
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createWizard = () => {
  return {
    name: NAME[getRandomPositiveInteger(0, NAME.length - 1)],
    message: MESSAGE[getRandomPositiveInteger(0, MESSAGE.length - 1)] + ' ' + MESSAGE[getRandomPositiveInteger(0, MESSAGE.length - 1)]
  };
};
