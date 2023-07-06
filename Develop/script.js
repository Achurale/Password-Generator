// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Applicable variable strings for password characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var symbol = "@#$%^&*()_+-={}[]<>~!?"

// Strings used depending on what the user wants to use in their password from the four options
var allChar = upperCase + lowerCase + number + symbol
// // Strings where one option wasn't wanted
var noNumber = upperCase + lowerCase + symbol
var noSymbol = upperCase + lowerCase + number
var noUpper = lowerCase + number + symbol
var noLower = upperCase + number + symbol
// // Strings where two options weren't wanted
var onlyLetter = upperCase + lowerCase
var noLetter = number + symbol
var upNum = upperCase + number
var lowNum = lowerCase + number
var upSym = upperCase + symbol
var lowSym = lowerCase + symbol
// // If only one option is wanted, use the original variables above this section


function generatePassword() {
  var length = window.prompt("Enter your desired password length between 8 and 128 characters long.")
  var numberQuery = confirm("Do you want numbers? OK for Yes. Cancel for no.")
  var symbolQuery = confirm("Do you want special symbols? OK for yes. Cancel for no.")
  var lowCaseSet = confirm("Do you want lowercase letters? OK for yes. Cancel for no.")
  var upCaseSet = confirm("Do you want uppercase letters? OK for yes. Cancel for no.")

  var result = ""
  
// Length must be between 8 and 128 or the user will be prompted to try again.
  if (length < 8 || length > 128) {
    result += "Please press the button again and put in a length between 8 and 128."
// All options wanted
  } else if (numberQuery == true && symbolQuery == true && lowCaseSet == true && upCaseSet == true) {
  for (var i = 0; i < length; i++){
    result += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }
// Only three options wanted below
} else if (symbolQuery == true && lowCaseSet == true && upCaseSet == true) {
  for (var i = 0; i < length; i++){
    result += noNumber.charAt(Math.floor(Math.random() * noNumber.length));
  }
} else if (numberQuery == true && lowCaseSet == true && upCaseSet == true) {
  for (var i = 0; i < length; i++){
    result += noSymbol.charAt(Math.floor(Math.random() * noSymbol.length));
  }
} else if (symbolQuery == true && numberQuery == true && upCaseSet == true) {
  for (var i = 0; i < length; i++){
    result += noLower.charAt(Math.floor(Math.random() * noLower.length));
  }
} else if (symbolQuery == true && lowCaseSet == true && numberQuery == true) {
  for (var i = 0; i < length; i++){
    result += noUpper.charAt(Math.floor(Math.random() * noUpper.length));
  }
// Only two options are wanted below
} else if (lowCaseSet == true && upCaseSet == true) {
  for (var i = 0; i < length; i++){
    result += onlyLetter.charAt(Math.floor(Math.random() * onlyLetter.length));
  }
} else if (numberQuery == true && symbolQuery == true) {
  for (var i = 0; i < length; i++){
    result += noLetter.charAt(Math.floor(Math.random() * noLetter.length));
  }
} else if (upCaseSet == true && numberQuery == true) {
  for (var i = 0; i < length; i++){
    result += upNum.charAt(Math.floor(Math.random() * upNum.length));
  }
} else if (lowCaseSet == true && numberQuery == true){
  for (var i = 0; i < length; i++){
    result += lowNum.charAt(Math.floor(Math.random() * lowNum.length));
  }
} else if (upCaseSet == true && symbolQuery == true) {
  for (var i = 0; i < length; i++){
    result += upSym.charAt(Math.floor(Math.random() * upSym.length));
  }
} else if (lowCaseSet == true && symbolQuery == true) {
  for (var i = 0; i < length; i++){
    result += low.charAt(Math.floor(Math.random() * lowSym.length));
  }
// Only one option is wanted below
} else if (upCaseSet == true) {
  for (var i = 0; i < length; i++){
    result += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  }
} else if (lowCaseSet == true) {
    for (var i = 0; i < length; i++){
    result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }
} else if (numberQuery == true) {
    for (var i = 0; i < length; i++){
    result += number.charAt(Math.floor(Math.random() * number.length));
  }
} else if (symbolQuery == true) {
    for (var i = 0; i < length; i++){
    result += symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
// No options were selected, user is prompted to try again.
} else {
  result += "Please click the button again and choose an option."
}

  return result
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
