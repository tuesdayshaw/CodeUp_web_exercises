/**
 * Created by canidmars on 4/11/17.
 */

// Exercise 1:

var randomNumber = Math.floor(Math.random() * 10);

for (var i = 0; i < 11; i++) {
    console.log(randomNumber + " * " + i + " = " + (randomNumber * i) );
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