/**
 * Created by canidmars on 4/13/17.
 */

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    var planetsString = planetsArray.join("<br>");

    console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an unordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    var planetsStringTwo = planetsArray.join("<li>");

    console.log("<ul>" + planetsStringTwo + "</ul>");



    //Bonus:
    //create function to convert from 24 hr time to 12 hr time
    //this function takes a string that is time in 24 hr format
    //and returns a string in 12 hour format ("23:00") => "11:00pm

    var twentyFourHour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];
    var twelveHour = [];

//convert each string element into a new array with hour and minutes separated
//so we can take that hour element and subtract from it to convert to 12 hour. am or pm can be attached.
})();