/**
 * Created by canidmars on 4/12/17.
 */
(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.unshift('Sun');
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.push('Pluto');
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.shift('Sun');
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.pop('Pluto');
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    var index = planets.indexOf('Earth');
    console.log(index);

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.splice(3, 1);
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.splice(3, 0, 'Mars');
    logPlanets();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.reverse();
    logPlanets();

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.sort();
    logPlanets();


    // Bonus:

    // create an array with 12 different meals:
    // create a function that picks 6 random meals per M-Sa and logs "Monday - pizza":


    var meals = ['tacos', 'pizza', 'sandwich', 'salad', 'soup', 'pasta', 'egg rolls', 'sushi', 'curry', 'hot dog', 'burger', 'steak'];
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var plan = [];

    function foodSchedule() {
        for (var i = 0; i < days.length; i++) {
            var item = meals[Math.floor(Math.random() * meals.length)];
            do {
            plan.unshift(item);
            } while(plan[i] < days[i]);
        }
        console.log(days[i] + " is: " + plan);
    }

    foodSchedule();

    // add a loop to not repeat the meals!!!




    // Bonus:

    // create an array with 3 empty spaces. create a function that calls strike or score and fills into next
    // available spot in array. then create a function that checks the full array and tells you if you won or not.


    var game = [];
    var dice = ['Strike', 'Score'];
    var win = ['Score', 'Score', 'Score'];
    var lose = ['Strike', 'Strike', 'Strike'];

    function strike() {
        for (var i = 0; i < 3; i++) {
            var rollTheDice = dice[Math.floor(Math.random() * dice.length)];
            game.unshift(rollTheDice);
        }
        console.log(game);

        if (game == win) {
            console.log('You won!');
        } else if (game == lose) {
            console.log('You lost!');
        } else {
            console.log('Try again!')
        }
    }
    strike();
})();