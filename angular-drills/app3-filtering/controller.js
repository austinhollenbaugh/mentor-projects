angular.module("filterApp").controller("controller", function($scope, service) {
  $scope.data = service.getData();
});
