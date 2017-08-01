(function() {
	'use strict';

	angular
		.module('FacePong.Game')
		.factory('ball', function(gameCanvas) {
			var x = 200;
			var y = 300;
			var x_speed = 0;
			var y_speed = 3;

			function render() {
				gameCanvas.context.beginPath();
				gameCanvas.context.arc(x, y, 5, 2 * Math.PI, 0);
				gameCanvas.context.fillStyle = "#f00008";
				gameCanvas.context.fill();
			}

			function update(paddle1, paddle2) {
				x += x_speed;
				y += y_speed;
				var top_x = x - 5;
				var top_y = y - 5;
				var bottom_x = x + 5;
				var bottom_y = y + 5;
				var width = gameCanvas.width();
				var height = gameCanvas.height();

				if (x - 5 < 0) {
					x = 5;
					x_speed = -x_speed;
				} else if (x + 5 > width) {
					x = 395;
					x_speed = -x_speed;
				}

				//ball went out of bounds
				if (y < 0 || y > height) {
					x_speed = 0;
					y_speed = 3;
					x = 200;
					y = 300;
				}

				if (top_y > (height/2)) {
					if (top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
						y_speed = -3;
						x_speed += (paddle1.x_speed / 2);
						y += y_speed;
					}
				} else {
					if (top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y && top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x) {
						y_speed = 3;
						x_speed += (paddle2.x_speed / 2);
						y += y_speed;
					}
				}

				if( x_speed > 3 )
				{
					x_speed = 3
				}

				if( y_speed > 3 )
				{
					y_speed = 3
				}
			}

			return {
				x: function() {return x;},
				render: render,
				update: update
			}
		})
})();
