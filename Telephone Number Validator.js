function telephoneCheck(str) {

  let regEx = /[0-9]/g
  let regEx2 = /^[0-9]|^[(]/
  let regEx3 = /[^0-9-()\s]/g
  let number = str.match(regEx)

  if (str.indexOf('(') !== -1) {
    if(str.indexOf(')') === -1) return false
    if (str.indexOf(')') - str.indexOf('(') !== 4) return false
  }

  if (str.indexOf(')') !== -1) {
    if(str.indexOf('(') === -1) return false
  }

  if(regEx3.test(str)) return false

  if(!regEx2.test(str)) return false

  if (number.length === 11) {
    if (number[0] !== '1') return false
  } else if (number.length === 10) {
  } else {
    return false
  }



  return true
}

console.log(telephoneCheck("1525-535-5255"));