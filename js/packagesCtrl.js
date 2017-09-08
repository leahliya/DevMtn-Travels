angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $state, mainService) {

    $scope.packageInfo = mainService.getPackages($state.params.country);
          
});