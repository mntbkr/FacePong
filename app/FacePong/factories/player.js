(function() {
	'use strict';

	angular
		.module('FacePong.Game')
		.factory('player', function(gameInput) {
			var paddle = new Paddle(175, 580, 150, 10);

			function render() {
				paddle.render();
			}

			function update() {
				var move = gameInput.getMovePaddle()

				switch( move ) {
					case 'left':
						this.paddle.move(-4);
						break;

					case 'right':
						this.paddle.move(4);
						break;

					default:
						this.paddle.move(0);
				}
			}

			return {
				paddle: paddle,
				render: render,
				update: update
			}
		})
})();
