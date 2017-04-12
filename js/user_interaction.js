/**
 * Created by canidmars on 4/12/17.
 */

"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var name;

function namePrompt() {
    name = prompt('What is your name?');
    console.log(name);

    if (name === null || name === "") {
        alert('Please provide a name.');
        namePrompt();
    }

    return name;
}



// TODO: Show an alert message that welcomes the user based on their input.

alert('Hello, ' + namePrompt());




// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var confirmed = confirm('Do you like pizza?')

function pizzaQuestion() {
    confirmed;
    if (confirmed){
        alert('We all do!');
    } else {
        alert('Crazy person!');
    }
}

pizzaQuestion();


// Bonus Exercise:
var user;

function userLogin() {
    user = confirm('Are you registered?');
    if (user){
        prompt("Enter Username: ", "Enter password: ");

    }else {
        prompt("Please register.", "Create username: ", "Create password: ")
    }
    return user;
}

//IIFE:

(function() {
    //code here
})();