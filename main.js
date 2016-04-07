'use strict';

var ctx = require('axel');
var shapes = require('./shapes.js')(ctx);

var width = 20;
var height = 20;

global.result = [];

// Clear the terminal
ctx.clear();


shapes.fill(0,255,0);
shapes.stroke(0,0,255);

// draw a rect
shapes.rect(1,1,10,15);

// make sure, next input request starts on its own line
//console.log('');

// Draws the canvas


shapes.finish();