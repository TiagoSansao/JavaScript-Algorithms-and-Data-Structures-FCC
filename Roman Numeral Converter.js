function convertToRoman(num) {
  // let romanNumbers = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'CD', 'D', 'CM', 'M']
  let romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let decimalNumbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  decimalNumbers = decimalNumbers.sort((b, a) => a - b)
  console.log(decimalNumbers)
  let final = '';
  
  for (let i = 0; i < decimalNumbers.length; i += 1) {
    while(decimalNumbers[i] <= num) {
      final += romanNumbers[i];
      num -= decimalNumbers[i];
    }
  }
  
  return final
  
  }
  
  console.log(convertToRoman(2));