angular.module('quoteBook').controller('controller', function($scope, service) {
  $scope.test = service.test;

  $scope.quotes = service.getData();

  $scope.addQuote = function() {
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }
    if (service.addData(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  };

  $scope.deleteMe = function(textToRemove) {
    service.removeData(textToRemove);
  };
});
