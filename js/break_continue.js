/**
 * Created by canidmars on 4/11/17.
 */

"use strict";

/// Solution 1:
/*
do {
    var randomNumber = Math.floor((Math.random()*50)+1);
    console.log(randomNumber);
}while(randomNumber % 2 == 0);


/// Solution 2:

while(true){

    var randomNumber = Math.floor((Math.random() * 50) + 1);
    console.log(randomNumber);
    if(randomNumber % 2 !== 0){
        console.log("I stopped at: " + randomNumber);
        break;
    }
}

*/

/// My Attempt:

var randomNumber = Math.floor((Math.random()*50)+1);
console.log("Random number to skip is " + randomNumber);

for (i = 0; i <= 50; i++){
    if(i % 2 == 0){
        continue;
    } else {
        if (i == randomNumber){
            console.log("Yikes! Skipping number: " + i);
        }else{
            console.log("Here is an odd number: " + i);
         }
    }
}

