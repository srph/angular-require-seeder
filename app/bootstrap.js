require([
	'angular',
	'./app',
	'./components/_index'
], function(angular, app) {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});
});