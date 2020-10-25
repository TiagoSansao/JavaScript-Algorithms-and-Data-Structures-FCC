function rot13(str) {

  let letters = str.split('')
  let position
  let newPosition
  let regEx = /[A-Z]/

  for (let c = 0; c < letters.length; c += 1) {
    position = letters[c].charCodeAt(0)
    if (regEx.test(letters[c])) {
      letters[c] = getLetter(position)
    }
  }

  return letters.join('');

  function getLetter(position) {
    newPosition = position - 13;
    if (newPosition < 65) {
      newPosition = position + 13
      console.log(newPosition)
    }
    return String.fromCharCode(newPosition)
  }
}

console.log(rot13("SERR PBQR PNZC"));