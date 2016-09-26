
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
})

app.directive("toRed", function() {
  return {
    restrict: "EA",
    link: function($scope, element, attrs) {
      element.css("color", "red")
    }
    //template: "<div class='test'></div>",
    //templateUrl: "template.html",
    //replace: true
    
  }
})
//var app = angular.module(name) // getter
app.filter("byName", function() {
  return function(input, search) {
    var filtered = []
    if (search) {
      angular.forEach(input, function(item) {
        if (item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
          filtered.push(item)
        }
      })
      
      return filtered;
    } else {
      return input
    }
  }
})

/*app.service("Users", function() {
  var test = ""
  
  this.users = null;
  
  this.getUsersCount = function() {
    return this.users.length
  }
  
  this.setUsers = function(users) {
    this.users = users
  }
})*/

app.factory("Users", function() {
  var test = ""
  return {
    users: null,
    getUsersCount: function() {
      console.log(test)
      return this.users.length
    },
    setUsers: function(users) {
      this.users = users;
    }
  }
})







