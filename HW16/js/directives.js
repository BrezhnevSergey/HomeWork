/**
 * Created by brezh on 27.09.2016.
 */

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
});