define([
    'jquery'
], function ($) {
    'use strict';


    $("#save").on('click', function(){
        localStorage.getItem('myCat')
        localStorage.setItem('myCat', 'Tom');
    });

    $("#delete").on('click', function(){
        localStorage.removeItem('myCat', 'Tom');
    });


 });