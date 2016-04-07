'use strict';

module.exports = function(ctx) {
	var strokeColor = [0, 0, 0];
	var fillColor = [0, 0, 0];

	return {
		_setStrokeColor: function() {
			ctx.bg(strokeColor[0], strokeColor[1], strokeColor[2]);
		},

		_setFillColor: function() {
			ctx.bg(fillColor[0], fillColor[1], fillColor[2]);
		},

		stroke: function(r, g, b) {
			strokeColor[0] = r;
			strokeColor[1] = g;
			strokeColor[2] = b;
		},

		fill: function(r, g, b) {
			fillColor[0] = r;
			fillColor[1] = g;
			fillColor[2] = b;
		},

		rectStroke: function(x, y, w, h) {
			x += 1; y += 2;

			this._setStrokeColor();
			ctx.line(x, y, x+w, y);
			ctx.line(x, y, x, y+h+1);
			ctx.line(x+w, y, x+w, y+h+1);
			ctx.line(x, y+h, x+w, y+h);
		},

		rectFill: function(x, y, w, h) {
			x += 1; y += 2;
			w += 1;

			this._setFillColor();
			ctx.box(x, y, w, h);
		},

		rect: function(x, y, w, h) {
			this.rectFill(x, y, w, h);
			this.rectStroke(x, y, w, h);
			//console.log('\n' + s);
		},

		finish: function() {
			ctx.cursor.restore();
			console.log('');
		}
	};
};