
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


//MAIN
//var aa = $("span:contains('Lorem')").siblings("div:last").find("div.level3").not("div.level button");
var divs = $("span:contains('Lorem')").siblings("div:last").find("div.level3:not(:has(>button))").each(function(index) {
    $(this).append("<button>button</button>").addClass("button");
});

console.log(divs);

});