angular.module("apiApp").controller("controller", function($scope, service) {
  service.getData().then(function(response) {
    console.log(response);
    $scope.smurfs = response;
  });
});
