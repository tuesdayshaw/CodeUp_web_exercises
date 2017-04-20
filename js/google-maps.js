/**
 * Created by canidmars on 4/19/17.
 */

(function () {
    "use strict";


    //// 2nd Map with GeoCoder:

    var btn = document.getElementById('btn');
    var address = document.getElementById('addressInput');
    var geocoder = new google.maps.Geocoder();
    var mapOptions = {
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions);

    function locationGeoCode() {

    geocoder.geocode({"address": address.value}, function (results, status) {
        if (status === 'OK'){
            map.setCenter(results[0].geometry.location)
        } else {
            alert("Address not found")
        }
    });
        address.value = '';
    }

    btn.addEventListener('click', locationGeoCode);



    //// 3rd Map with lat/lng search and zoom:

    var lat = document.getElementById('lat');
    var lng = document.getElementById('lng');
    var update = document.getElementById('update');
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var zoomValue = 18;

    var mapOptionsTwo = {
        disableDefaultUI: true,
        zoom: zoomValue,
        center: {
            lat: +lat.value,
            lng: +lng.value
        }
    };

    var mapTwo = new google.maps.Map(document.getElementById("map-canvas3"), mapOptionsTwo);

    function latLngSearch() {
        mapTwo.setCenter({lat: +mapOptionsTwo.center.lat.value, lng: +mapOptionsTwo.center.lng.value});
        mapTwo.setZoom(zoomValue);
        lat.value = '';
        lng.value = '';
    }

    update.addEventListener('click', latLngSearch);

    plus.addEventListener('click', function () {
        mapTwo.setZoom(zoomValue += 1)
    });
    minus.addEventListener('click', function () {
        mapTwo.setZoom(zoomValue -= 1)
    });



    //// Map 4 with markers and info windows:


    function markerMap() {
        var codeup = {
            lat: 29.426791,
            lng: -98.489602
        };
        var mapOptionsFour = {
            zoom: 15,
            center: codeup,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapFour = new google.maps.Map(document.getElementById("map-canvas4"), mapOptionsFour);
        var marker = new google.maps.Marker({
            position: codeup,
            map: mapFour,
            animation: google.maps.Animation.DROP
        });
        var infowindow = new google.maps.InfoWindow({
            content: "CodeUp - 600 Navarro"
        });
        infowindow.open(mapFour, marker);
    }

    markerMap();

})();
