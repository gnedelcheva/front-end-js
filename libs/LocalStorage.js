define([
    'jquery'
], function ($) {
    'use strict';

    $('#selectRole').change(function() {
        localStorage.setItem('selectRole', this.value);
    });
    

    $("#save").on('click', function(){
      
        var person = { "firstName": 'lana', "lastName": "rey", "role": "manager"};//- default person
    

        localStorage.setItem('person', JSON.stringify(person)); //stringify object and store

        //var retrievedPerson = JSON.parse(localStorage.getItem('person')); //retrieve the object
        //var retrievedName = person[Object.keys(person)[0]];  //retrieve the key
        //var retrievedName2 = person[Object.keys(person)[1]];  //retrieve the key
        //var retrievedRole = person[Object.keys(person)[2]];  //retrieve the key

        //console.log(retrievedPerson);
        // console.log(retrievedName);
        // console.log(retrievedName2);

        $('input').each(function(){    
            var id = $(this).attr('id');
            var value = $(this).val();
           localStorage.setItem(id, value);
    
        });  


    });



    $("#delete").on('click', function(){
        localStorage.removeItem('person');
        localStorage.removeItem('selectRole');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
    });

 });