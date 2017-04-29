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
        zoom: 8
    };


    // Google Map:
    var btn = document.getElementById('btn');
    var address = document.getElementById('locationSearch');
    var geocoder = new google.maps.Geocoder();

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

    function createMarker() {
        var marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        marker.addListener('dragend', function(event) {
            map.setZoom(8);
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
        $('#cityInfo').html(data.city.name);
    }


    function weatherReport(data, i) {
        var content = '';


        data.list.forEach(function (el, index) {

            var day;
            day = moment.unix(el.dt).format("dddd, MMMM Do");

            content += '<div id="focus" class="weather col-xs-4">' + '<p>' + day + '</p>';
            content += '<h2 id="temp">' + el.temp.max.toFixed(0) + '°' + '/ ' + el.temp.min.toFixed(0) + '°' + '</h2>';
            content += '<p>' + '<img src="http://openweathermap.org/img/w/' + el.weather[0].icon + '.png">' + '</p>';
            content += '<p>' + el.weather[0].main + ': ' + el.weather[0].description + '</p>';
            content += '<p>' + 'Humidity: ' + el.humidity + '</p>';
            content += '<p>' + 'Wind: ' + el.speed + '</p>';
            content += '<p>' + 'Pressure: ' + el.pressure + '</p>' + '</div>';
        });
        $('#report').html(content);
    }

    $('#focus').hover(function (e) {
        (this).css('background-color', 'rgba(0, 0, 0, 1)')
    });


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

            $('body').css('background-image', 'url(../img/' + data.list[0].weather[0].main + '.gif)');

        }).fail(function () {
            console.log("Failed")
        })
    }
    getWeather();


});
