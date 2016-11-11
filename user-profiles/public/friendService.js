angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http ({
        method: 'POST',
        url: 'http://localhost:7000/api/login',
        data: user
      });
    };

    this.getFriends = function() {
    	return $http ({
        method: 'GET',
        url: 'http://localhost:7000/api/profiles'
      });
    };

});
