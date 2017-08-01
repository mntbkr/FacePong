(function() {
	"use strict";

	angular
		.module('FacePong.Game')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/FacePong', {
				templateUrl: 'FacePong/template.html',
				controller: 'GameCtrl'
			});
		}]);
})();
