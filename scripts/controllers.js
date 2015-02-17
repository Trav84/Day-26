angular.module('app.controllers', []).controller('buttonController', function($scope, $timeout) {

	$scope.buttonText = "Submit";
	$scope.isLoading = "Loading...";
	$scope.disableButton = false;

	$scope.onClick = function() {
		$scope.disableButton = true;
		$scope.buttonText = $scope.isLoading;
		$timeout(function(){ 
			$scope.disableButton = false;
			$scope.buttonText = "Submit"; }, 2000);
	};

}).controller('tabController', function($scope) {

	$scope.showOrNot = true;

	$scope.onClick = function(tabNum) {
		console.log('click');
		if(tabNum === 1) {
			$scope.show1 = !$scope.show1;
			$scope.show2 = false;
			$scope.show3 = false;
		} 
		else if(tabNum === 2) {
			$scope.show2 = !$scope.show2;
			$scope.show1 = false;
			$scope.show3 = false;
		}
		else {
			$scope.show3 = !$scope.show3;
			$scope.show2 = false;
			$scope.show1 = false;
		}
		$scope.showOrNot = !$scope.showOrNot;
		console.log($scope.showOrNot);
	};

}).controller('likeButtonCtrl', function($scope) {

	$scope.count = 0;
	$scope.like = 'Likes';

	$scope.onClick = function() {
		$scope.count++;
		if($scope.count === 1) {
			$scope.like = 'Like';
		} else {
			$scope.like = 'Likes';
		}
	};
}).controller('loginController', function($scope, $window) {

	var correctEmail = false;
	var correctPass = false;

	$scope.submit = function() {

	console.log($scope.pass);
	console.log($scope.email);

		if(angular.isUndefined($scope.email)) {
			console.log('missing email');
			$scope.errorTxt1 = "Please enter an email before logging in.";
		}  else {
			$scope.errorTxt1 = "";
		}
		if(angular.isUndefined($scope.pass)) {
			console.log('missing password');
			$scope.errorTxt2 = "Please enter a password before logging in.";
		} else {
			$scope.errorTxt2 = "";
		}
		switch($scope.pass) {
			case 'password123':
			case 'pandas':
			case 'honeycrisp':
				correctPass = true;
				break;
			default:
				correctPass = false;
		}

		if(correctPass === false) {
			$scope.errorTxt3 = "The password you entered was incorrect.";
		} else {
			$scope.errorTxt3 = "";
		}

		switch($scope.email) {
			case 'aaron@theironyard.com':
			case 'admin@google.com':
			case 'travis.czerw@gmail.com':
				correctEmail = true;
				break;
			default:
				correctEmail = false;
		}

		if(correctEmail === false) {
			$scope.errorTxt4 = "Your user was not found.";
		} else {
			$scope.errorTxt4 = "";
		}

		if(correctEmail === true && correctPass === true) {
			$window.location ="http://theironyard.com";
		}
	};		
});

