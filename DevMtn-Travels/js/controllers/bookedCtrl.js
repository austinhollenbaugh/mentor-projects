angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
  // You will need to write a function that checks the url params and then loops over the data object in the service and then returns
  // the object the matches the id being passed in the url params. Do this in your controller
  console.log($scope);
  $scope.ten = 10;

    for(var i = 0; i < mainSrv.travelInfo.length; i++) {
      if(parseInt($stateParams.id) === mainSrv.travelInfo[i].id) {
        $scope.currentCity = mainSrv.travelInfo[i];
      }
    }

});
