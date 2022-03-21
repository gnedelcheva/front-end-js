define([
    'jquery'
], function ($) {
    'use strict';

    $("#save").on('click', function(){
      
        var person = { 
            "firstName": $('#firstName').val(),
            "lastName": $('#lastName').val(),
            "role": $('#selectRole').val()
        };

        localStorage.setItem('person', JSON.stringify(person)); //stringify object and store
    });

    $("#delete").on('click', function(){
        localStorage.removeItem('person');
    });

 });