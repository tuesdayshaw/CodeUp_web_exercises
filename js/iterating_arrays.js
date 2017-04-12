/**
 * Created by canidmars on 4/12/17.
 */
(function() {
    "use strict";



        // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

        // TODO: Create a log statement that will log the number of elements in the names array.

        // TODO: Create log statements that will print each of the names array elements individually.


var names = ['Tuesday', 'Ian', 'Mike', 'Jackie'];

//console.log(names.length);

//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    names.forEach(function (element, index) {
        console.log(element + " and the index is: " + index);
    })
})();
