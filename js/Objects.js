/**
 * Created by canidmars on 4/13/17.
 */

(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    var person = {
        firstName: "Tuesday",
        lastName: "Shaw",
        sayHello: function () {
            return "Hello from " + person.firstName + " " + person.lastName;
        }
    };

    console.log(person.sayHello());


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];



    shoppers.forEach(function(shopper){
        var discountAmount = 0;
        var discountPriceMinimum = 200;
        if (shopper.amount > discountPriceMinimum) {
            var discountPrice = 0.35;
            discountAmount = shopper.amount * discountPrice
        }
        console.log('------------------------');
        console.log(shopper.name + " your total is: " + shopper.amount);
        if (discountAmount){
            console.log(" your discount is: " + discountAmount);
        }
        console.log("Your total is: " + (shopper.amount - discountAmount));
    });


// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array

    var books = [
        {
            title: 'Moby Dick',
            author: {
                firstName: 'Herman',
                lastName: 'Melville'
            }
        },
        {
            title: '1984',
            author: {
                firstName: 'George',
                lastName: 'Orwell'
            }

        },
        {
            title: 'Mice and Men',
            author: {
                firstName: 'John',
                lastName: 'Steinbeck'
            }

        },
        {
            title: 'A Tale of Two Cities',
            author: {
                firstName: 'Charles',
                lastName: 'Dickens'
            }

        },
        {
            title: 'Little Women',
            author: {
                firstName: 'Louisa May',
                lastName: 'Alcott'
            }

        }
    ];

// log out the books array
    console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

    books.forEach(function(bookName, i, array){
        console.log("Book #" + [i]);
        console.log("Title: " + bookName.title);
        console.log("Author: " + bookName.author.firstName + " " + bookName.author.lastName);
        console.log("---");

    });
// end loop here



    //Object BONUS:

      //  Create a pet object with the following...

       // Properties:

    //1) name - string
    //2) species - string
    //3) age - number
    //4) gender - string
    //5) clean - boolean
    //6) hungry - boolean
    //7) sleepy - boolean
    //8 ) happy - boolean
    //9) petFood - number 10
    //10) soap - number 3

    var pet = {
        name: 'Indigo',
        species: 'Canine',
        age: 10,
        gender: 'Female',
        clean: false,
        hungry: true,
        sleepy: false,
        happy: true,
        petFood: 10,
        soap: 3,
        callPet: function () {
            return "Hi" + name + "! Good girl!"
        },
        playWithPet: function () {
            return happy == true, hungry == true, clean == true
        },
        feedPet: function (petFood) {
            return hungry == false, sleepy == true, petFood -= 1
        },
        makePetSleep: function () {
            return sleepy == false, happy == false, hungry == true, age++
        },
        cleanPet: function (soap) {
            return happy == false, clean == true, soap -= 1
        }
    }



    //Methods
        // 1) callPet() - call’s out pet name
        // 2) playWithPet() - makes pet happy and hungry and dirty
        // 3) feedPet(petFood) - makes pet not hungry and sleepy and reduces petFood by 1
        // 4) makePetSleep() - makes pet not sleepy, not happy, and hungry, and 1 older
        // 5) cleanPet(soap) - makes pet not happy and clean and reduces soap by 1

    //Have fun with the pet!
        //call it, feed it, play with it, make it sleep, clean it


})();