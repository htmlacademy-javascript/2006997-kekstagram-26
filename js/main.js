function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getLengthComment(line, length) {
  if (line.length <= 0 || line.length > length) {
    return 'false';
  } else {
    return 'true';
  }
  getLengthComment(5, 12);


  function maxLength(str, length) {
    return str.length > length;
  }
  maxLength('vrfve', 10)
