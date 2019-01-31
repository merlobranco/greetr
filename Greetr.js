/*jslint node: true*/
/*eslint no-console: off*/
/*global console jQuery*/
'use strict';

(function(global, $) {
    // Setting up a function that allows us to avoid using all the time the keyword 'new'
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };
    
    // Here we will define all the supported methods
    // They should be defined here, so they will be loaded once
    Greetr.prototype = {};
    
    // Here we have the fuction constructor for setting up our object
    Greetr.init = function(firstname, lastname, language) {
        // We will use self for being safe
        var self = this;
        self.firtname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    };
    
    // Setting properly the prototype for the new created Greetr.init object
    // So they will be accessed through the prorotype chain
    Greetr.init.prototype = Greetr.prototype;
    
    // Adding it to the global object, and creating a nice alias 'G$'
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery)); // We could pass jQuery or $