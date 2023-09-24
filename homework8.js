// Create a function that receives one parameter.
// Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - the function should return false.

function checkingUpperSymbols(param) {
    return /^[A-Z]+$/.test(param);
  }

  let res = checkingUpperSymbols("TEST");
  
  console.log(res);