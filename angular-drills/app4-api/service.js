angular.module("apiApp").service("service", function($http) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://smurfs.devmounta.in/smurfs/'
    }).then(function(response) {
      // console.log(response);
      return response.data;
    });
  };
});
