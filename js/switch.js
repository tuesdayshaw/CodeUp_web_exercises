/**
 * Created by canidmars on 4/10/17.
 */

"use strict";

// Exercise 1:

var luckyNumber = Math.floor(Math.random()* 6);

var discount1 = 0.10;
var discount2 = 0.25;
var discount4 = 0.50;
var discount5 = 1.00;

var spent = 60;

switch(luckyNumber) {
    case 1:
        console.log("You received a 10% discount!");
        console.log("Your total is $" + (spent - (spent * discount1)).toFixed(2));
        break;
    case 2:
        console.log("You received a 25% discount!");
        console.log("Your total is $" + (spent - (spent * discount2)).toFixed(2));
        break;
    case 4:
        console.log("You received a 50% discount!");
        console.log("Your total is $" + (spent - (spent * discount4)).toFixed(2));
        break;
    case 5:
        console.log("You received a 100% discount!");
        console.log("Your purchase is free: $" + (spent - (spent * discount5)).toFixed(2));
        break;
    default:
        console.log("Your purchase did not receive a discount.");
        console.log("Your total is $" + spent.toFixed(2));
        break;
}

//Exercise 2:

var monthNumberEntered = Math.floor(Math.random()* 20);

switch(monthNumberEntered) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Not a month");
}