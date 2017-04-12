/**
 * Created by canidmars on 4/11/17.
 */

"use strict";

// Exercise 1:

var randomNumber = Math.floor(Math.random() * 10);

for (var i = 1; i < 11; i++) {
    console.log(randomNumber + " x " + i + " = " + (randomNumber * i) );
}


// Exercise 2:

for (var i = 0; i < 11; i++) {

    var randomNumber = Math.floor(Math.random() * 200)

    if(randomNumber % 2 == 0)
    {
        console.log(randomNumber + ' is even');
    }
    else
    {
        console.log(randomNumber + ' is odd');
    }

}


// Exercise 3:

for (var i = 100; i > 0; i-=5) {
    console.log(i);
}

// Bonus:
/* Create the html code in order to display generate a random list of 5 <li> inside of an <ul>
and the number inside the <li> elements could be between 10 and 20. The output should look like this:
 <ul>
    <li>Random 13</li>
    <li>Random 19</li>
    <li>Random 15</li>
    <li>Random 16</li>
    <li>Random 17</li>
 </ul>
 */


console.log('</ul>');
var randomNumber

for (var i = 1; i <= 5; i++) {
    randomNumber = Math.floor(Math.random() * 10) + 10;
    console.log(
        '   <li>Random ' + randomNumber + '</li>'
        );
}

console.log('</ul>');