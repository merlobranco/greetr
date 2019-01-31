/*jslint node: true*/
/*eslint no-console: off*/
/*global console jQuery*/
'use strict';

(function(global, $) {
    // Setting up a function that allows us to avoid using all the time the keyword 'new'
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };
    
    /*
       Variables that won't be access outside, only internally
       It's only be inside this memory space of this function, thanks to closures
    */
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inició seción'
    };
    
    /*
       Here we will define all the supported methods and exposed objects, properties
       They should be defined here, so they will be loaded once
    */
    Greetr.prototype = {
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },
        validate: function() {
            // Here 'this' is referencing the object that is calling this function
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Ivalid language';
            }
        },
        greeting: function() {
            // Getting the proper greetings through the property name
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreeting: function() {
            // Getting the proper greetings through the property name
            return formalGreetings[this.language] + ', ' + this.fullname();
        },
        /* 
           Adding chainable methods
        */
        greet: function(formal) {
            var msg;
            
            // If undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            if (console) {
                console.log(msg);
            }
            
            /*
               'this' refers to the calling object at execution time
               makes the method chainable
            */
            return this;
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }
            
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }
    };
    
    // Here we have the fuction constructor for setting up our object
    Greetr.init = function(firstname, lastname, language) {
        // We will use self for being safe
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    };
    
    /*
       Setting properly the prototype for the new created Greetr.init object
       So they will be accessed through the prorotype chain
    */
    Greetr.init.prototype = Greetr.prototype;
    
    // Adding it to the global object, and creating a nice alias 'G$'
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery)); // We could pass jQuery or $