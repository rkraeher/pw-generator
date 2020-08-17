//Password criteria

var ranUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var ranLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ranNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var ranSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "|", "?", "'", ",", "<", ">", ".", "/", "`", "~", ";", ":",];

//Random functions

var randomizeU = ranUpper[Math.floor(Math.random()* ranUpper.length)];
var randomizeL = ranLower[Math.floor(Math.random()* ranLower.length)];
var randomizeN = ranNumber[Math.floor(Math.random()* ranNumber.length)];
var randomizeS = ranSpecial[Math.floor(Math.random()* ranSpecial.length)];
 
 //String concatenation // var namesTogether = "My pet name is " + random + " " + random2;

//How to combine but in a random order; I need to randomize the string concatenation. One possible way to do this is to store the randoms in an array and then randomly
//pull from that array to generate the password characters. 




//When user visits site
alert("Welcome to Ru's password generator site. Press the 'Generate Password' button to begin selecting your password criteria and generate a secure password.");

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteria); 

function criteria() {

    var length = prompt("Select a length for your password. Password must be at least 8 characters and no more than 128 characters.");
     //Only proceed if user selects a valid length
    if (length >= 8 && length <= 128) {
        var types = prompt("Select the character types that you want in your password. Type 'u' for uppercase, 'l' for lowercase, and 's' for special characters. Type 'all' to include all character types."); 
    
        //TODO: Eventually I want any combination to be possible. For example only lowercase and special. Also, user must select at least one type to proceed.
        if (types === "u" || types === "l" || types === "s" || types === "all") {
            // while (password.length <= length) { //TODO: Still working on the randomizer. 
            //     function generator() {
            //         var password = randomizeU + randomizeL + randomizeN + randomizeS;
            //         password.push();
            //         console.log(password);
            //     } 
            // }
        }
    }
  
}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//Pseudo-code
//click a button to generate a password 
//After clicking button, user is presented with a series of prompts that enables the user to select which criteria should be in the password.
//Prompt for length that is at least 8 characters and no more than 128
//A prompt for character types -- should these be separate prompts for upper, lower, and special characters? Or one that is just like type: u, l, and s (or any combo thereof) to 
    //include each of those types
//After all prompts a pw is generated that matches the criteria
//The pw is displayed in an alert or written to the page. 



//Notes
//Unsure about the meaning of this in the acceptance criteria: 
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
