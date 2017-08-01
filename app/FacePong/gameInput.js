(function() {
	'use strict';

	angular
		.module('FacePong.Game')
		.factory('gameInput', function() {
			//var keysDown = {};
			var movePaddle;

			// window.addEventListener("keydown", function (event) {
			// 	keysDown[event.keyCode] = true;
			// });
			//
			// window.addEventListener("keyup", function (event) {
			// 	delete keysDown[event.keyCode];
			// });

			function setMovePaddle( value ) {
				movePaddle = value
			}

			function getMovePaddle() {
				return movePaddle
			}

			return {
				//keysDown: keysDown,
				setMovePaddle: setMovePaddle,
				getMovePaddle: getMovePaddle
			};
		});
})();
