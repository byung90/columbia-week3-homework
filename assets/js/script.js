// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password || "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password and Check
function generatePassword() {
  var cancel = false;
  var passwordLength;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumber = false;
  var includeSpecialCharacter = false;
  let password;

  //Prompt for password length
  var validPasswordLength = false;
  while (validPasswordLength === false && cancel === false) {
    var passwordLengthTemp;
    passwordLengthTemp = window.prompt("Enter password length (min 8 characters, max 128 characters");
    if (passwordLengthTemp != null) {
      if (/\d/.test(passwordLengthTemp) && passwordLengthTemp >= 8 && passwordLengthTemp <= 128) {
        passwordLength = passwordLengthTemp;
        validPasswordLength = true;
      }
    }
    else {
      cancel = true;
    }
  }

  //Prompt for lowercase
  var includeLowercaseTemp;
  while (includeLowercaseTemp !== "T" && includeLowercaseTemp !== "F" && cancel === false) {
    includeLowercaseTemp = window.prompt("Requires Lowercase? (T/F)");
    if (includeLowercaseTemp !== null) {
      includeLowercaseTemp = includeLowercaseTemp.toUpperCase();
    }
    else {
      cancel = true;
    }
  }

  if (includeLowercaseTemp === "T") {
    includeLowercase = true;
  }

  //Prompt for uppercase
  var includeUppercaseTemp;
  while (includeUppercaseTemp !== "T" && includeUppercaseTemp !== "F" && cancel === false) {
    includeUppercaseTemp = window.prompt("Requires Uppercase? (T/F)");
    if (includeUppercaseTemp !== null) {
      includeUppercaseTemp = includeUppercaseTemp.toUpperCase();
    }
    else {
      cancel = true;
    }
  }

  if (includeUppercaseTemp === "T") {
    includeUppercase = true;
  }

  //Prompt for numeric value
  var includeNumberTemp;
  while (includeNumberTemp !== "T" && includeNumberTemp !== "F" && cancel === false) {
    includeNumberTemp = window.prompt("Requires Number? (T/F)");
    if (includeNumberTemp !== null) {
      includeNumberTemp = includeNumberTemp.toUpperCase();
    }
    else {
      cancel = true;
    }
  }

  if (includeNumberTemp === "T") {
    includeNumber = true;
  }

  //Prompt for special characters
  var includeSpecialCharacterTemp;
  while (includeSpecialCharacterTemp !== "T" && includeSpecialCharacterTemp !== "F" && cancel === false) {
    includeSpecialCharacterTemp = window.prompt("Requires Special Character? (T/F)");
    if (includeSpecialCharacterTemp !== null) {
      includeSpecialCharacterTemp = includeSpecialCharacterTemp.toUpperCase();
    }
    else {
      cancel = true;
    }
  }

  if (includeSpecialCharacterTemp === "T") {
    includeSpecialCharacter = true;
  }


  if (cancel === true) {
    window.alert("User cancelled the generator.");
    return;
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