/**
 * Created by canidmars on 4/11/17.
 */

"use strict";

var myNameIs = 'Tuesday'; // TODO: Fill in your name here.

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return ("Hello, " + name);
}
sayHello();

/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello(myNameIs);


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random

var random = Math.floor((Math.random()*100)+1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 */

 function isOdd(number){
    return (number % 2 == 0) ? ('Number ' + number + ' is even') : ('Number ' + number + ' is odd');
}
console.log(isOdd(11));


/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

console.log(isOdd(random));

/*
### Functions extras

Create 2 functions:

    One that does the procedure of generating a random number
    taking MAX and MIN as parameters, so we can change them every
    time i call the function without writing the rest of the
    Math.random Code. Make sure it returns the value of the
    generated number.

    The other function will take a string which is the date in
    this format: `"11/04/17"` and return it into `April 11 2017`,
    don't use any built-in date functions in JS, create a switch
    statement.
    */

//1:

function randomNumber(number) {
    return (random = Math.floor((Math.random()*Math.max(number))+Math.min(number)));

};

console.log(randomNumber(678, 600));


// 2:

function dateConversion() {

}