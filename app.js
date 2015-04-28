var courseRoster = angular.module('courseRoster', ['ui.router']);


// courseRoster.message = "welcome!";
courseRoster.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('courses', {
    url: "/courses",
    templateUrl: "partials/courses.html",
    controller: "CoursesCtrl"
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    templateUrl: "partials/courses.students.html",
    controller: 'StudentsCtrl'
  });


});



courseRoster.directive("welcome", function() {
    return function (scope, element, attrs) {
        element.text(scope.app.message + " " + attrs.message);
    }
});

courseRoster.directive("enter", function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.enter);
        });
    }
});

courseRoster.directive("leave", function () {
    return function (scope, element, attrs) {
        element.bind("mouseleave", function () {
            element.removeClass(attrs.enter);
        });
    }
});

courseRoster.directive("welcometext", function() {
  return {
     restrict: "E",
     link: function () {
         alert("I hope this makes sense.")
     }
  }
  });
