function palindrome(str) {
  let regEx = /[^A-Za-z0-9]/g
  str = str.toLowerCase().replace(regEx, '')
  let palindrome = []
  for (let i = 0; i < str.length; i += 1) {
    palindrome.unshift(str[i])
  }
  console.log(palindrome.join(''))
  if (palindrome.join('') === str) return true
  else return false
}

console.log(palindrome("eye"));