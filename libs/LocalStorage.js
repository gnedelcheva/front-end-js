define([
    'jquery'
], function ($) {
    'use strict';


    $("#save").on('click', function(){

        $('input').each(function(){    
            var id = $(this).attr('id');
            var value = $(this).val();
           localStorage.setItem(id, value);
    
        });  

    });

    $("#delete").on('click', function(){
        localStorage.removeItem('Title');
        localStorage.removeItem('Description');
        localStorage.removeItem('Assigned');
        localStorage.removeItem('Status');
    });

    $('#Assigned').change(function() {
        localStorage.setItem('Assigned', this.value);
    });

    $('#Status').change(function() {
        localStorage.setItem('Status', this.value);
    });


 });