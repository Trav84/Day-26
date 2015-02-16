angular.module('app.controllers', [])
.controller('buttonController', function($scope, $timeout) {

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

});