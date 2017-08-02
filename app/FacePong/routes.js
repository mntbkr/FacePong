(function() {
	"use strict";

	angular
		.module('FacePong.Game')
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/FacePong', {
				templateUrl: 'FacePong/views/template.html',
				controller: 'GameCtrl'
			});
		}]);
})();
