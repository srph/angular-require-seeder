AngularJS with RequireJS
=====

A simple implementation of AngularJS with RequireJS. Often, a medium-large scaling application gets harder to maintain if it has shitty structure. This also leads to slower workflow and developer demotivation. Well, this is how I solved such a bothering problem.

### Installation ###

1. Clone

```git clone https://github.com/srph/angular-require-seeder.git```

2. Install Bower dependencies

```bower install```

3. And you're good to go!

### Structure ###

Further explanation will be provided halfway the final version

```
	- app/
		- components/
			- _index.js
			- controller.js
			- directives.js
			- services.js
			- utils.js
		- controllers/
			- alpha.js
		- directives/
			- example.js
		- services/
			- gamma.js
		- utils/
			- constants/
			- states/
			- _constants.js
			- _location.js
			- _states.js
		- views/
		- app.js
		- bootstrap.js
	- bower.json
	- index.html
```