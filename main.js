'use strict';

//var shapes = require('shapes.js');
var ctx = require('axel');

var width = 20;
var height = 20;

global.result = [];



// Clear the terminal
ctx.clear();

// Sets the pixel BG color to green
ctx.bg(0,255,0);

// Draws a line into the console
ctx.line(1,1,10,10);


// reset
ctx.bg(0,0,0);
ctx.fg(255,255,255);

ctx.clear();