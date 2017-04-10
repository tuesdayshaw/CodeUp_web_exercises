/**
 * Created by canidmars on 4/10/17.
 */

"use strict";


//1

var grade = ((70 + 80 + 95) / 3);

if (grade >= 80) {
    console.log("You're awesome!")
} else {
    console.log("You need to practice more")
};


//2

var Cameron = 180;
var Ryan = 250;
var George = 320;

var discount = 0.35;

if (Cameron >= 200) {
    console.log("Cameron spent $" + Cameron.toFixed(2) + ". Total after discount is $" + (Cameron * discount).toFixed(2));
} else {
    console.log("You did not spend enough.");
};
if (Ryan >= 200) {
    console.log("Ryan spent $" + Ryan.toFixed(2) + ". Total after discount is $" + (Ryan * discount).toFixed(2));
} else {
    console.log("You did not spend enough.");
};
if (George >= 200) {
    console.log("George spent $" + George.toFixed(2) + ". Total after discount is $" + (George * discount).toFixed(2));
} else {
    console.log("You did not spend enough.");
};

//3

var flipACoin = Math.floor(Math.random()* 2);

var advice = (flipACoin) ? console.log("Buy a house") : console.log("Buy a car");