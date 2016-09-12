
$(document).ready(function() {

//HEADER
var spanElem = $("header strong").closest("span");
var text = "HEADER";
var newElem = "";
for (var i = 0; i < 5; i++) {
    newElem +="<div>" + text + "</div>";
}
spanElem.prepend(newElem);

$(".header div:last").remove();

$("header div:not(.header)").replaceWith(function () {
    return $("<h1>" + $(this).text() + "</h1>").css("background-color", "lightgray");
});



});