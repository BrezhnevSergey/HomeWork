
var name = "authApp";
var dependencies = ["ngRoute", "ngCookies"];

angular.module(name, dependencies)
    .config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'templates/loginform.html',
                controller: 'loginCtrl'
            });
        $routeProvider.when('/admin',
            {
                templateUrl: 'templates/admin.html',
                controller: 'adminCtrl'
            });
        $routeProvider.when('/user',
            {
                templateUrl: 'templates/user.html',
                controller: 'userCtrl'
            });
        $routeProvider.otherwise({
            templateUrl: 'templates/loginform.html'
        });
});