angular.module("loginApp").directive("loginDir", function() {
  return {
    templateUrl: "loginTmpl.html",
    controller: function($scope) {
      $scope.alert = function() {
        alert("you're logged in!");
      };
    }
  };
});
