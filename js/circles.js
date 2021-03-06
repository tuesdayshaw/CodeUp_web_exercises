/**
 * Created by canidmars on 4/14/17.
 */

(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function (area){
            var area = Math.PI * Math.pow(this.radius, 2);
            return area; // TODO: return the proper value
        },
        logInfo: function (doRounding, doFixing) {
            // TODO: complete this method.
            var area = this.getArea();
            if (doRounding) {
                area = Math.round(area);
            }
            if(doFixing) {
                area = area.toFixed(2);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false, true);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true, true);
})();