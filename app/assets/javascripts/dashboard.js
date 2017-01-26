//= require angular/angular.min
//= require angular-flip-clock/dist/angular-flip-clock.full

angular
.module('myApp', ['dyFlipClock'])
.run(function($rootScope, $interval) {
	$rootScope.time = 3600000 - new Date().getTime() % 3600000;
	console.log(3600000 - new Date().getTime() % 3600000);

	$interval(function() {
		$rootScope.time -= 1000;
		if ($rootScope.time <= 0) {
			$rootScope.time = 3600000 - new Date().getTime() % 3600000;
		}
	}, 1000);
});