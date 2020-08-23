//Variables and Arrays
var types;
var passwordText;
var ranUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var ranLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ranNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var ranSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "|", "?", "'", ",", "<", ">", ".", "/", "`", "~", ";", ":"];
var ranAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "|", "?", "'", ",", "<", ">", ".", "/", "`", "~", ";", ":"];
var charInput = ["u", "l", "n", "s", "all"];
var password = [];
var pwString = [];

// Greeting
alert("Welcome to Ru's password generator site. Press the 'Generate Password' button to begin selecting your password criteria and generate a secure password.");

// Randomizer Functions

function randomizeU() {
    return ranUpper[Math.floor(Math.random()* ranUpper.length)];
  }

function randomizeL() {
    return ranLower[Math.floor(Math.random()* ranLower.length)];
}

function randomizeN() {
    return ranNumber[Math.floor(Math.random()* ranNumber.length)];
}

function randomizeS() {
    return ranSpecial[Math.floor(Math.random()* ranSpecial.length)];
}

function randomizeAll() {
    return ranAll[Math.floor(Math.random()* ranAll.length)];
}

// Array shuffler to increase security
function securePassword(array) {     
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  // Create random password based on user input
  function criteria() {       
     
      if (types.includes("u")) {      
          randomizeU;
          password.push(randomizeU());
      } 
      if (types.includes("l")) {
          randomizeL;
          password.push(randomizeL());
      }
      if (types.includes("s")) {
          randomizeS;
          password.push(randomizeS());
      }
      if (types.includes("n")) {
          randomizeN;
          password.push(randomizeN());
      }
      if (types.includes("all")) {  
          randomizeAll;
          password.push(randomizeAll());
      }
    // Shuffles random password for added security and randomization
    securePassword(password);
    pwString.push(password.join(""));
    return pwString[pwString.length - 1];
    } 

// Collect and validate user input for password
function generator() {   
    if (password.length > 0){
        password = [];
    } 
    var finalPassword = "";
    var pwLength = prompt("Select a length for your password. Password must be at least 8 characters and no more than 128 characters.");
        //Only proceed if user selects a valid length
    
        if (pwLength < 8 || pwLength > 128) {      //!! Bug with validating that only numerical values are entered.
            alert("Please select a valid length.");

        } else {    
            types = prompt("Select the character types that you want in your password. Type 'u' for uppercase, 'l' for lowercase, 'n' for number, and 's' for special characters. Type 'all' to include all character types."); 
            if (types !== "u" && types !== "l" && types !== "s" && types !== "n" && types !== "all") {
            alert("Please try again and select valid criteria");
            }
            types.toLowerCase();         //!!Bugged
            while (password.length < pwLength) { 
                finalPassword = criteria();
            }
        }
    return finalPassword;    
}

// Write password and display in text area
function writePassword() {
    var passwordPrint = generator();  //pwString[pwString.length - 1];  
    var passwordText = document.querySelector("#password");
    passwordText.textContent = passwordPrint;
}

// Button
var generateBtn = document.querySelector("#generate"); 
generateBtn.addEventListener("click", writePassword); 