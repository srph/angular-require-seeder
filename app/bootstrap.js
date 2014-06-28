// Assets base path
var path = '../bower_components/';

// RequireJS Configurations
require.config({
	paths: {
		"angular": path + "angular/angular.min",
		"uiRouter": path + "angular-ui-router/angular-ui-router/release/angular-ui-router.min"
	},

	shim: {
		"angular": {
			exports: 'angular'
		},

		"uiRouter": {
			exports: "uiRouter",
			deps: ["angular"]
		}
	}
});

// Start the application
require([
	'angular',
	'./app',
	'./components/_index'
], function(angular, app) {

	// When the document is ready, bootstrap the application
	// with our angular module
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});
});