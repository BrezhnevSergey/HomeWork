/**
 * Created by brezh on 27.09.2016.
 */
var name = "app"
var dependencies = []

var app = angular.module(name, dependencies) // setter

/*app.controller("TestCtrl", function($scope) {
 //$scope.users = ["Ivanov", "Petrov", "Sidorov"]
 $scope.users = [
 {name: "Ivanov", age: 21, completed: false},
 {name: "Petrov", age: 26, completed: false},
 {name: "Sidorov", age: 221, completed: true}
 ]
 })*/
app.controller("TestCtrl", function($scope, $filter, Users) {
    this.test = "123"
    $scope.search = {
        val: ""
    }
    //$scope.users = ["Ivanov", "Petrov", "Sidorov"]
    $scope.users = [
        {name: "Ivanov", age: 21, completed: false},
        {name: "Petrov", age: 26, completed: false},
        {name: "Sidorov", age: 221, completed: true}
    ]

    //$scope.users = $filter('byName')(users, $scope.search.val)

    /*$scope.$watch("search", function(val) {
     console.log(val)
     }, true)*/

    Users.setUsers($scope.users)
    console.log(Users.getUsersCount())
});