define(['../app'], function(app) {
	'use strict';

	app.controller('AlphaCtrl', [
		'$scope',
		function() {
			$scope.test = 'Yay';
		}
	]);
});