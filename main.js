'use strict';

//var shapes = require('shapes.js');
var ctx = require('axel');

var resetBg = [0,0,0];
var resetFg = [255,255,255];

var width = 20;
var height = 20;

global.result = [];



// Clear the terminal
ctx.bg.apply(ctx, resetBg);
ctx.fg.apply(ctx, resetFg);
ctx.clear();

// Sets the pixel BG color to green
ctx.bg(0,255,0);

// Draws a line into the console
ctx.line(1,1,10,10);


// reset
ctx.bg.apply(ctx, resetBg);
ctx.fg.apply(ctx, resetFg);

// make sure, next input request starts on its own line
console.log('');