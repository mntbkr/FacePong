(function() {
	'use strict';

	angular
		.module('FacePong.Game')
		.controller("GameCtrl", function(gameCanvas, player, computer, ball) {
			var animate = window.requestAnimationFrame;

			//hack to get canvas on the global scope for the paddle
			canvasContext = gameCanvas.context

			var render = function () {
				gameCanvas.refresh()
				player.render();
				computer.render();
				ball.render();
			};

			var update = function () {
				player.update();
				computer.update(ball);
				ball.update(player.paddle, computer.paddle);
			};

			var step = function () {
				update();
				render();
				animate(step);
			};

			animate(step);
		})
		.factory('gameCanvas', function() {
			var canvas = document.getElementById("gameBoard");
			var width = canvas.width;
			var height = canvas.height;
			var context = canvas.getContext('2d');

			function refresh() {
				context.fillStyle = "#000";
				context.fillRect(0, 0, width, height);
			}

			return {
				context: context,
				refresh: refresh,
				width: function() {return width;},
				height: function() {return height;}
			}
		});
})();
