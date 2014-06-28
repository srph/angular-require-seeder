define(['../app'], function(app) {
	'use strict';

	app.factory('GammaSrvc', [
		'$scope',
		function() {
			return {
				test: function() {
					return 'test';
				}
			}
		}
	]);
});