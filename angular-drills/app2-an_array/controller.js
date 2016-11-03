angular.module("arrayApp").controller("arrayController", function($scope, service) {
  $scope.array = service.getData();
});
