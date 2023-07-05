// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var length = prompt("Enter your desired password length")
// var numberQuery = prompt("Include Numbers? Y/N")
// var symbolQuery = prompt("Include special symbols? Y/N")

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// var number = "0123456789"
// var symbol = "@#$%^&*()_+-={}[]<>~!?"

// var allChar = upperCase + lowerCase + number + symbol
// var noNumber = upperCase + lowerCase + symbol
// var noSymbol = upperCase + lowerCase + number


// Query Length, query numbers in password, query symbols in password.
// If numbers and symbols = Y, then generate password using 'allChar' matching 'Length' value
// If numbers = Y and symbols = N, then generate password using 'noSymbol' matching 'Length' value
// If numbers = N and symbols = N, then generate password using 'noNumber' matching 'Length' value


function generatePassword() {
  
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
