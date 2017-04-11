/**
 * Created by canidmars on 4/10/17.
 */


"use strict";

//Exercise 1:

var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;

do {
    console.log(allCones + "are available");
    cones = Math.floor(Math.random() * 5) + 1;
    if (cones <= allCones) {
        allCones -= cones;
    } else if (cones >= allCones) {
        allCones -= cones;
        console.log("Sorry, not enough cones left to sell " + cones)
    } else {
        console.log("Sorry, all sold out!")
    }
} while (allCones > 0);
        console.log("All sold!");

//Exercise 2:

var i = 1;

while (i < 65536) {
    (i *= 2)
    console.log(i);
}

