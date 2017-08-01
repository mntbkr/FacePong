//'use strict';

angular.module('FacePong.CanvasExperiment',['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/CanvasExperiment', {
			templateUrl: 'CanvasExperiment/template.html',
			controller: 'CanvasExperimentCtrl'
		});
	}])

	.controller("CanvasExperimentCtrl", function($scope) {
		var board = document.getElementById('board');
		var ctx = board.getContext('2d');
		var d=220;
		var n = 4;
        //var x = 40, y = 40;
		var a = (Math.sqrt(3)-1)/2*d;
		var h = a*Math.sqrt(3)/2;
		var t1 = a/2+h;

		$scope.sq = '#7bbf60';
		$scope.t1 = '#bf5e66';
		$scope.t2 = '#6064bf';
		$scope.st = '#172f21';
		$scope.d = 220;
		$scope.stw = 15;
		$scope.$watchCollection ("[sq, t1, t2, stw, st]", function( /*newValue, oldValue*/ ) {
			window.st = $scope.st;
			window.stw = $scope.stw;
			draw(ctx, $scope.sq, $scope.t1, $scope.t2, $scope.d);
		});
		window.st = $scope.st;
		window.stw = $scope.stw;
		draw(ctx, $scope.sq, $scope.t1, $scope.t2);

		function drawRect1(ctx, x, y, d, cl) {
			var a = (Math.sqrt(3)-1)/2.0*d;
			var h = a*Math.sqrt(3)/2.0;
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x+a/2.0, y+h);
			ctx.lineTo(x+a/2.0-h,y+h+a/2.0);
			ctx.lineTo(x-h,y+a/2.0);
			ctx.closePath();
			ctx.fillStyle = cl;
			ctx.fill();
			ctx.strokeStyle = window.st;
			ctx.lineWidth = window.stw;
			ctx.stroke();
		}

		function drawRect2(ctx, x, y, d, cl) {
			var a = (Math.sqrt(3)-1)/2.0*d;
			var h = a*Math.sqrt(3)/2.0;
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x+h, y+a/2.0);
			ctx.lineTo(x+h-a/2.0,y+a/2.0+h);
			ctx.lineTo(x-a/2.0,y+h);
			ctx.closePath();
			ctx.fillStyle = cl;
			ctx.fill();
			ctx.strokeStyle = window.st;
			ctx.lineWidth = window.stw;
			ctx.stroke();
		}

		function drawTriangle1(ctx, x, y, d, cl) {
			var a = (Math.sqrt(3)-1)/2.0*d;
			var h = a*Math.sqrt(3)/2.0;
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x+a/2.0, y+h);
			ctx.lineTo(x-a/2.0,y+h);
			ctx.closePath();
			ctx.fillStyle = cl;
			ctx.fill();
			ctx.strokeStyle = window.st;
			ctx.lineWidth = window.stw;
			ctx.stroke();
		}

		function drawTriangle2(ctx, x, y, d, cl) {
			var a = (Math.sqrt(3)-1)/2.0*d;
			var h = a*Math.sqrt(3)/2.0;
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x+a/2.0, y-h);
			ctx.lineTo(x-a/2.0,y-h);
			ctx.closePath();
			ctx.fillStyle = cl;
			ctx.fill();
			ctx.strokeStyle = window.st;
			ctx.lineWidth = window.stw;
			ctx.stroke();
		}

		function drawTriangle3(ctx, x, y, d, cl) {
			var a = (Math.sqrt(3)-1)/2.0*d;
			var h = a*Math.sqrt(3)/2.0;
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x+h, y+a/2.0);
			ctx.lineTo(x+h,y-a/2.0);
			ctx.closePath();
			ctx.fillStyle = cl;
			ctx.fill();
			ctx.strokeStyle = window.st;
			ctx.lineWidth = window.stw;
			ctx.stroke();
		}

		function drawTriangle4(ctx, x, y, d, cl) {
			var a = (Math.sqrt(3)-1)/2.0*d;
			var h = a*Math.sqrt(3)/2.0;
			ctx.beginPath();
			ctx.moveTo(x,y);
			ctx.lineTo(x-h, y+a/2.0);
			ctx.lineTo(x-h,y-a/2.0);
			ctx.closePath();
			ctx.fillStyle = cl;
			ctx.fill();
			ctx.strokeStyle = window.st;
			ctx.lineWidth = window.stw;
			ctx.stroke();
		}

		function draw(ctx, clSq, clTr1, clTr2, d) {
			for (var px=-1; px<n; px++)
				for (var py=-1; py<n; py++) {
					drawRect1(ctx, px*d, py*d, d, clSq);
					drawRect2(ctx, px*d+a, py*d, d, clSq);
					drawRect1(ctx, px*d+t1, py*d+t1, d, clSq);
					drawRect2(ctx, px*d+a+t1, py*d+t1, d, clSq);

					drawTriangle1(ctx, px*d+a/2.0, py*d-h, d, clTr1);
					drawTriangle2(ctx, px*d+a/2.0, py*d+h, d, clTr2);
					drawTriangle3(ctx, px*d+a, py*d, d, clTr2);
					drawTriangle4(ctx, px*d, py*d, d, clTr1);

					drawTriangle1(ctx, px*d+a/2.0+t1, py*d-h+t1, d, clTr1);
					drawTriangle2(ctx, px*d+a/2.0+t1, py*d+h+t1, d, clTr2);
					drawTriangle3(ctx, px*d+a+t1, py*d+t1, d, clTr2);
					drawTriangle4(ctx, px*d+t1, py*d+t1, d, clTr1);
				}
		}
	});

