


//var app = angular.module(name) // getter




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







