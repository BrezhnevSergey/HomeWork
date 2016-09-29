
var toDoListApp = angular.module("toDoListApp");

    toDoListApp.controller('toDoListCtrl', function($scope) {
        $scope.list = model;
        $scope.submit = function(text) {
            if (text) {
                $scope.list.tasks.push({text: text, done: false});
                $scope.text = "";
            }
        };

        $scope.remove = function (task) {
            var index = $scope.list.tasks.indexOf(task);
            $scope.list.tasks.splice(index, 1);
        };

        $scope.filter = "$";
        $scope.changeFilterTo = function (fl) {
          $scope.filter = fl;
        };
        $scope.getFilter = function () {
            switch($scope.filter) {
                case '$':
                    return {};
                case 'false':
                    return {done:false};
                case 'true':
                    return {done:true};
            }
        };
    });
