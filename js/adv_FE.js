/**
 * Created by canidmars on 4/29/17.
 */


    $(document).ready(function(){
    "use strict";

        $('.btn').click(function () {
            $('.btn').removeClass('active');
            $(this).toggleClass('active');
        });

        $('#showAll').click(function () {
            $('#first').hide();
            $('#second').hide();
            $('#third').hide();
            $('#first').show();
            $('#second').show();
            $('#third').show();
        });

        $('#showRed').click(function () {
            $('#first').hide();
            $('#second').hide();
            $('#third').hide();
            $('#first').show();
        });

        $('#showBlue').click(function () {
            $('#first').hide();
            $('#second').hide();
            $('#third').hide();
            $('#second').show();
        });

        $('#showYellow').click(function () {
            $('#first').hide();
            $('#second').hide();
            $('#third').hide();
            $('#third').show();
        });


    });


