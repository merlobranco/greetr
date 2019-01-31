/*jslint node: true*/
/*eslint no-console: off*/
/*global console $ G$*/
'use strict';

/*
    Gets a new object (the architecture allows us to not have to use the 'new' keyword here)
*/
var g = G$('John', 'Doe');

// Using our chainable methods
g.greet().setLang('es').greet(true).log();

// Using our object on the click even of the login button
$('#login').click(function() {
    
    // Creating a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('John', 'Doe');
    
    // Hiding the login on the screen
    $('#logindiv').hide();
    
    // Firing off an HMTL greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).htmlGreeting('#greeting', true).log();
    
});