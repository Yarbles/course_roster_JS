courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  var app = this;
  app.message = "hello";
  $scope.ctrlCourse = "Intro to Gender Studies";
});
