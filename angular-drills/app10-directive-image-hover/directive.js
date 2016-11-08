angular.module("imageDirApp").directive("imageDir", function() {
  return {
    templateUrl: 'imageTmpl.html',
    scope: {
      image: "@"
    },
    link: function(scope, elem, attribute) {
      console.log(scope.image);

      elem.on("mouseover", function() {
        elem.css("opacity", "0.5");
        // console.log(elem);
      });

      elem.on("mouseleave", function() {
        elem.css("opacity", "1");
        // console.log(elem);
      });
    }
  };
});
