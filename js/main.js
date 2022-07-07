function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function maxLength(str, length) {
  return str.length > length;
}
maxLength('return true', 10);
