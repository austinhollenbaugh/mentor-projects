angular.module('selectAll').directive("inputDir", function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attribute) {

      elem.on('click', function() {
        elem[0].select();
        console.log(elem);
      });

    }
  };
});
