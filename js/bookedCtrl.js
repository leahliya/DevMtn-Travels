angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $state, mainService) {
    console.log($state.params.id)
$scope.test = ($state.params.id)
//$scope.packageInfo = mainService.getPackages($state.params.id);

//$scope.tes1 = ($state.params.city)
//$scope.test2 = ($state.params.country)

    });