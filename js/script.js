

//Variables

var ranUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var ranLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ranNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var ranSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "]", "{", "}", "|", "?", "'", ",", "<", ">", ".", "/", "`", "~", ";", ":",];
var password = [];
var charInput = ["u", "l", "n", "s", "all"];

// if (charInput.indexOf(types) !== -1) {
//     console.log(types);
// }






//Functions

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

function securePassword(array) {        //This is my array shuffler to rearrange the output of the criteria function. 
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

function criteria() {
//   var types = prompt("Select the character types that you want in your password. Type 'u' for uppercase, 'l' for lowercase, and 's' for special characters. Type 'all' to include all character types."); 
//   types.toLowerCase(); //This used to be inside function. Now I am moving it outside. 

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
  if (types.includes("all")) { //!!Bugged. At the moment, randomize all returns password.length+2. One way to deal with this would be to create another array that has ALL the characters in it and just do the same randomize function as above. 
      randomizeU;

      randomizeL;
    //   password.push(randomizeL());
      randomizeS;
    //   password.push(randomizeS());
      randomizeN;
    //   password.push(randomizeN());
    password.push(randomizeU(), randomizeL(), randomizeS(), randomizeN());
    password.pop();
  }
//   if (password.length === pwLength) {
//       return console.log(password);
//   }



//   } else {                  //!!This is bugged. Won't allow user to try again data.
//            alert("Please select valid critera."); 
//       }

console.log(password);
    
  } 



//When user visits site
alert("Welcome to Ru's password generator site. Press the 'Generate Password' button to begin selecting your password criteria and generate a secure password.");

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", criteria); //I think I need to replace criteria function make it so that clicking the button, instead of starting the program like it did before
//now it works to display the password that I have randomly generated. It needs to be a function, not criteria - the function that will display the pw. This isn't quite how I wanted it
//to work but for now I can have it work this way. Also revise my welcome alert text. 


var pwLength = prompt("Select a length for your password. Password must be at least 8 characters and no more than 128 characters.");
     //Only proceed if user selects a valid length

    if (pwLength < 8 || pwLength > 128) {
        alert("Please select a valid length");
        pwLength;

    } else {    
        var types = prompt("Select the character types that you want in your password. Type 'u' for uppercase, 'l' for lowercase, and 's' for special characters. Type 'all' to include all character types."); 
        types.toLowerCase();
        while (password.length < pwLength) { 
            criteria();
        }
          
        
        //Run the criteria function.
        // var types = prompt("Select the character types that you want in your password. Type 'u' for uppercase, 'l' for lowercase, and 's' for special characters. Type 'all' to include all character types."); 
        // types.toLowerCase();

        // for (let i = 0; i < pwLength; i++) { //Try putting the loop here
        //     password.push //I think the ENTIRE combined output of the various randomizers needs to go here. Perhaps I make that the criteria function so I push the criteria function to the password var. 

        // if (types.includes("u")) {
        //     randomizeU;
        //       for (let i = 0; i < pwLength; i++) { //*This loop may have to go on the entire function. I need it to populate the array with all the selected elements and for the whole thing to have a length that corresponds to the user's input
        //         password.push(randomizeU());
        //       }
        //       console.log(password);
        //     //   shuffle(password);
        // } 
        // if (types.includes("l")) {
        //     randomizeL;
        //     for (let i = 0; i < pwLength; i++) { 
        //         password.push(randomizeL());
        //       }
        //       console.log(password);
        //     //   shuffle(password);
        
        //     } else {
        //         alert("Please select valid critera.");
        //     }
        // } 
    }
// } original ending bracket for criteria function
 

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
//A prompt for character types and allow any combination 
//After all prompts a pw is generated that matches the criteria
//The pw is displayed in an alert or written to the page. 



//Notes
//Ok so now I have to have a function for each of the types, that gets added into the randomizer.
//I will also need an array shuffle for the final password. 
//I need to allow any combination of criteria
 