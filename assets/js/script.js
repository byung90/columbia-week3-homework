// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password and Check
function generatePassword() {
  var passwordLength;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumber = false;
  var includeSpecialCharacter = false;
  let password;

  //Prompt for password length
  var validPasswordLength = false;
  while (!validPasswordLength) {
    var passwordLengthTemp;
    passwordLengthTemp = window.prompt("Enter password length (min 8 characters, max 128 characters");
    if (/\d/.test(passwordLengthTemp) && passwordLengthTemp >= 8 && passwordLengthTemp <= 128) {
      passwordLength = passwordLengthTemp;
      validPasswordLength = true;
    }
  }

  //Prompt for lowercase
  var includeLowercaseTemp;
  while (includeLowercaseTemp !== "T" && includeLowercaseTemp !== "F") {
    includeLowercaseTemp = window.prompt("Requires Lowercase? (T/F)").toUpperCase();
  }

  if (includeLowercaseTemp === "T") {
    includeLowercase = true;
  }

  //Prompt for uppercase
  var includeUppercaseTemp;
  while (includeUppercaseTemp !== "T" && includeUppercaseTemp !== "F") {
    includeUppercaseTemp = window.prompt("Requires Uppercase? (T/F)").toUpperCase();
  }

  if (includeUppercaseTemp === "T") {
    includeUppercase = true;
  }

  //Prompt for numeric value
  var includeNumberTemp;
  while (includeNumberTemp !== "T" && includeNumberTemp !== "F") {
    includeNumberTemp = window.prompt("Requires Numberic Value? (T/F)").toUpperCase();
  }

  if (includeNumberTemp === "T") {
    includeNumber = true;
  }

  //Prompt for special characters
  var includeSpecialCharacterTemp;
  while (includeSpecialCharacterTemp !== "T" && includeSpecialCharacterTemp !== "F") {
    includeSpecialCharacterTemp = window.prompt("Requires Special Character? (T/F)").toUpperCase();
  }

  if (includeSpecialCharacterTemp === "T") {
    includeSpecialCharacter = true;
  }

  //Create password with valid length and check validity
  var isValidPassword = [false, false, false, false];

  while (isValidPassword.includes(false)) {
    password = generatePasswordCharacter(passwordLength);
    isValidPassword = [false, false, false, false];
    if (includeLowercase) { //Check Lowercase
      isValidPassword[0] = /[a-z]/.test(password);
    }
    else {
      isValidPassword[0] = true;
    }

    if (includeUppercase) { //Check Uppercase
      isValidPassword[1] = /[A-Z]/.test(password);
    }
    else {
      isValidPassword[1] = true;
    }

    if (includeNumber) { //Check Numeric
      isValidPassword[2] = /\d/.test(password);
    }
    else {
      isValidPassword[2] = true;
    }

    if (includeSpecialCharacter) { //Check Special Character
      isValidPassword[3] = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password);
    }
    else {
      isValidPassword[3] = true;
    }
  }

  return password;
}

//Generate each password character
function generatePasswordCharacter(passwordLength) {
  let password = "";
  var characterOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()<>?-+=".split("");

  for (var i = 0; i < passwordLength; i++) {
    chooseRandomCharacter = Math.floor(Math.random() * characterOptions.length);
    password += characterOptions[chooseRandomCharacter];
  }

  return password;
}