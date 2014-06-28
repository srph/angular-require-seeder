define(['../app'], function(app) {
	'use strict';

	app.directive('example', [function() {
		return {
			restrict: 'EA',
			template: '{{ test }}'
		}
	}]);
});