angular.module('directivePractice').directive("lessonHider", function() {
  return {
    templateUrl: '../lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: "=",
      lessons: "=",
      dayAlert: "&"
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();

    },
    link: function(scope, elem, attrs) {

      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        for (var i = 0; i < scope.schedule.length; i++) {
          if (scope.lesson === scope.schedule[i].lesson) {
            scope.lessonDay = scope.schedule[i].weekday;
            elem.css('text-decoration', 'line-through');
            return;
          }
        }
      });

      scope.delete = function(lesson) {
        for (var i = scope.lessons.length - 1; i >= 0; i--) {
          if (lesson === scope.lessons[i]) {
            scope.lessons.splice(i, 1);
          }
        }
      };

      console.log(elem);

      elem.on('click', function() {
        if(elem.checked) {
            elem.css('text-decoration', 'none');
            // elem.removeAttr('checked');
          } else {
            elem.css('text-decoration', 'line-through');
            // elem.prop('checked');
          }
        // this.toggle(this.checked);
        // elem.css('text-decoration', 'line-through');
      });

      // $('input[type="checkbox"]').on('click', function() {
      //   var chk = $(this);
      //   if(checked) {
      //     chk.css('text-decoration', 'none');
      //     checked = false;
      //   } else {
      //     chk.css('text-decoration', 'line-through');
      //     checked = true;
      //   }
      // });

    }
  };
});
