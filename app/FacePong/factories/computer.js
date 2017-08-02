(function() {
	'use strict';

	angular
		.module('FacePong.Game')
		.factory('computer', function(gameCanvas) {
			var paddle = new Paddle(175, 10, 50, 10);

			function render() {
				paddle.render();
			}

			function update(ball) {
				var canvasWidth = gameCanvas.width()
				var x_pos = ball.x();
				var diff = -((paddle.x + (paddle.width / 2)) - x_pos);
				if (diff < 0 && diff < -4) {
					diff = -5;
				} else if (diff > 0 && diff > 4) {
					diff = 5;
				}
				paddle.move(diff, 0);
				if (paddle.x < 0) {
					paddle.x = 0;
				} else if (paddle.x + paddle.width > canvasWidth) {
					paddle.x = canvasWidth - paddle.width;
				}
			}

			return {
				paddle: paddle,
				render: render,
				update: update
			}
		})
})();
