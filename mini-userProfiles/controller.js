angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.isFavorite = mainService.toggleFavorite;

    $scope.getUsers = function() {
      $scope.users = mainService.getUsers();
      console.log($scope.users);
    };

    $scope.getUsers();

});
