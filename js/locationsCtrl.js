angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainService) {
    //$scope.test="You are inbeautiful country!!!"
    $scope.travelInfo = mainService.travelInfo    
          
        });