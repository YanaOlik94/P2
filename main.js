var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/profile', {
     templateUrl: 'profile.html',
     controller: 'profileCtrl'
    })
    .when('/profile-courses', {
      templateUrl: 'courses.html',
      controller: 'courseCtrl'
     
    });

});

app.controller('homeCtrl', function ($scope) {
  console.log('HomeCtrl');
  $scope.model = {
    message: 'This is my beautifull homepage'
  };
});


app.controller('profileCtrl', ['$scope', '$location', function ($scope, $location) {
  console.log('profileCtrl');
  $scope.model = {
    message: 'This is my profile'
  };

  $scope.openCourses = function() {
    $location.path('/profile-courses');
  };
}]);


app.controller('courseCtrl', function ($scope) {
  
  console.log('courseCtrl');

});
