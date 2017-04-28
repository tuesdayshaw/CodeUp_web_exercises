/**
 * Created by canidmars on 4/27/17.
 */

$(document).ready(function(){

    "use strict";


    // Variables:

    var map;
    var lat = 29.426791;
    var lng = -98.489602;
    var markerPosition = {
        lat: lat,
        lng: lng
    };
    var mapOptions = {
        center: markerPosition,
        zoom: 10
    };


    // Google Map:

    function createMarker() {
        var marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        marker.addListener('dragend', function(event) {
            map.setZoom(14);
            map.setCenter(marker.getPosition());
            lat = this.position.lat();
            lng = this.position.lng();
            getWeather();
        });
    }

    function mapIt() {
        map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
        createMarker();
    }
    mapIt();


    // Weather Report:

    function getCity(data){
        var city = '';
        city += '<h2>' + data.city.name + '</h2>';
        $('#cityInfo').html(city);
    }

    function weatherReport(data, i) {
        var content = '';
        data.list.forEach(function (el) {
            content += '<div class="weather col-xs-4">' + '<h2 id="temp">' + el.temp.max.toFixed(0) + '°' + '/ ' + el.temp.min.toFixed(0) + '°' + '</h2>';
            content += '<p>' + '<img src="http://openweathermap.org/img/w/' + el.weather[0].icon + '.png">' + '</p>';
            content += '<p>' + el.weather[0].main + ': ' + el.weather[0].description + '</p>';
            content += '<p>' + 'Humidity: ' + el.humidity + '</p>';
            content += '<p>' + 'Wind: ' + el.speed + '</p>';
            content += '<p>' + 'Pressure: ' + el.pressure + '</p>' + '</div>';
        });
        $('#report').html(content);
    }

    function getBackground()

    function getWeather() {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8",
            lat:    lat,
            lon:   lng,
            cnt: 3,
            units: 'Imperial'
        }).done(function (data) {
            console.log(data);
            getCity(data);
            weatherReport(data);
        }).fail(function () {
            console.log("Failed")
        })
    }
    getWeather();

    var today = new Date();
    console.log(today.getDate());

});
