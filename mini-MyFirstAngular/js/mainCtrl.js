angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ["me", "you", "her", "him"];

    $scope.addFriend = function(name) {
      $scope.friends.push(name);
    };
  });
  //end controller
