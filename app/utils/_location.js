define(['../app'], function(app) {
	'use strict';

	app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);
});