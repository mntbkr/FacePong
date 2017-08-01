(function() {
	'use strict';

	angular
		.module('FacePong.Game')
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
