angular.module('routingApp').controller("controller", function($scope, service) {
  $scope.getSmurfs = function() {
    service.getData().then(function(response) {
    console.log(response);
    $scope.smurfs = response;
    });
  };
});
