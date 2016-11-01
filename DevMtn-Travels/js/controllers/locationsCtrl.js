angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {

  $scope.packages = mainSrv.travelInfo;

});
