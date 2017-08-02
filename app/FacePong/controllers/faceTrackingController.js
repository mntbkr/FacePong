(function() {
	'use strict';

	angular.module('FacePong.Game')
		.controller("FaceTrackingCtrl", function(gameInput) {
			var canvas = document.getElementById('faceTrackCanvas');
			var context = canvas.getContext('2d');
			var tracker = new tracking.LandmarksTracker();
			tracker.setInitialScale(4);
			tracker.setStepSize(2);
			tracker.setEdgesDensity(0.1);
			tracking.track('#faceTrackVideo', tracker, { camera: true });
			tracker.on('track', function(event) {
				context.clearRect(0,0,canvas.width, canvas.height);
				if(!event.data) return;

				event.data.faces.forEach(function(rect) {
					context.strokeStyle = '#a64ceb';
					context.strokeRect(rect.x, rect.y, rect.width, rect.height);
					context.font = '11px Helvetica';
					context.fillStyle = "#fff";
					context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
					context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

					gameInput.setMovePaddle( setPaddleMotion( rect.x ) )
				});
			});

			function setPaddleMotion( x ) {
				if( x < 150 )
				{
					return 'left'
				}

				if( x > 170 )
				{
					return 'right'
				}

				return 'still'
			}
		})
})();
