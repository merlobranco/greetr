/*jslint node: true*/
/*eslint no-console: off*/
/*global console G$*/
'use strict';

var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true);