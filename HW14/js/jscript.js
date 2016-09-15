
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
    $("span:contains('Lorem')").siblings("div:last").find("div.level3:not(:has(>button))").each(function(index) {
        var className = "button" + index;
        $(this).append( $("<button>button</button>").addClass(className) );
    });

    var nwElem = "<h1>Greet</h1>";
    $("p:contains('Lorem'):first").closest(".container").prepend(nwElem);
    
    $("#ClickMe").on("click", function(e) {
        var target = $(e.target);
        var nwEl = "<div>NEW ITEM</div>";
        target.closest(".level3").siblings(".level3").eq(2).remove();
        target.parent().parent().parent().append(nwEl);  
    });

    $("#notClick").on("dblclick", function(e) {
        $("h3:even").css("color", "blue");
    });


  /*  var buttons = [];
      $("button").filter(function (index) {
        var nameClass = $(this).attr("class");
        if (nameClass !== undefined) {
            if (nameClass.indexOf("button") != -1) {
                buttons.push(this);
                $(this).on("click", function(e) {
                    $.each(buttons, function(index) {
                        $(this).text("BUTTON");
                    });
                });
            }
        }
    });*/
    $("button[class*='button']").slice(2,4).on("click", function() {
        $(this).text("BUTTON");
    });
    

    //FOOTER
    $("span:contains('Link')").each(function(ind) {
        var nElem = '<a href>' + $(this).text() + '</a>';
        $(this).text("").prepend(nElem);
    });
  
    $("b:contains('notification')").closest(".notify").removeClass(".notify");

});