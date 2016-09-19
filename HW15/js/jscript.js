
$(document).ready(function() {
    var arrayPicSize = [];
    var allPicWidth = 0;
    var preiewWidth = $(".gallery .preview").innerWidth();
    console.log("preiewWidth="+preiewWidth);
    var elemMargin = 0;
    var translateX = 0;

    $('#fileupload').on('change', function(e) {
        var files = e.target.files;
        for (var i = 0, file; file = files[i]; i++) {
            if(!file.type.match('image/*')) {
                continue;
            }
            var fileName = file.name;
            var fileRead = new FileReader();
            fileRead.onload = function(ev) {
                var newElem = '<img class="thumbnail" src="' + ev.target.result + '" title = "' + fileName +'" />';
                $(".preview #list").append(newElem);
                var size = $("#list .thumbnail:last").outerWidth();
                elemMargin = parseInt($("#list .thumbnail:last").css("margin-right"));
                arrayPicSize.push(size + elemMargin);
                totalPicWidth(arrayPicSize);
                if(!($("#list .thumbnail").hasClass("active"))) {
                    $("#list .thumbnail:first").addClass("active");   
                    $("#fullSize").css({
                        "visibility" : "visible",
                        "opacity" : "1"
                    });
                    $("#delete").bind("click", removePic);
                    $(".gallery .upload_box .delete").css({
                        "background-color" : "grey",
                        "cursor" : "pointer",
                        "color" : "black"});
                    showFull(); 
                }
                showManage();
            }
            fileRead.readAsDataURL(file);
        }
    });

    function totalPicWidth(arr) {
        allPicWidth = arr.reduce(function(a,b) {
            return a + b;
        });
    }

    function showFull() {
        var imgSrc = $("#list .active").attr("src");
        var imgTitle = $("#list .active").attr("title");
        var newElem = '<img src="' + imgSrc + '" title = "' + imgTitle +'" />';
        $("#fullSize img").replaceWith(newElem);
    }

    function isHasPrev() {
        if(($("#list .active").prev()).length) {
          return true;  
        }
        return false;
    }

    function isHasNext() {
        if(($("#list .active").next()).length) {
          return true;  
        }
        return false;
    }

    function showManage() {
        if(isHasNext()) {
            $(".gallery .next").css({
                "visibility" : "visible",
                "opacity" : "1" });
        } else {
            $(".gallery .next").css({
                "visibility" : "hidden",
                "opacity" : "0" });
        }
        if (isHasPrev()) {
            $(".gallery .prev").css({
                "visibility" : "visible",
                "opacity" : "1" });
        } else {
            $(".gallery .prev").css({
                "visibility" : "hidden",
                "opacity" : "0" });
        }
    }

    function removePic(){
        $("#list .active").remove();
    }


    $(".gallery .next").on("click", function(){
        var nextElem = $("#list .active").next();
        if(isHasNext()){
            var currentElemWidth = $("#list .active").outerWidth();
            translateX -= currentElemWidth + elemMargin;
            if(translateX <= preiewWidth - allPicWidth) {
                translateX = preiewWidth - allPicWidth - 3;
                $("#list").css("transform", "translateX(" + translateX + "px)");
                $("#list .thumbnail").removeClass("active");
                nextElem.addClass("active");
                showFull();
                showManage();
            } else {
                $("#list").css("transform", "translateX(" + translateX + "px)");
                $("#list .thumbnail").removeClass("active");
                nextElem.addClass("active");
                showFull();
                showManage();
            }
        } 
    });

    $(".gallery .prev").on("click", function(){
        var prevElem = $("#list .active").prev();
        if(isHasPrev()){
            var prevElemWidth = prevElem.outerWidth();
            translateX += prevElemWidth + elemMargin;
            if(translateX < 0) {
                $("#list").css("transform", "translateX(" + translateX + "px)");
                $("#list .thumbnail").removeClass("active");
                prevElem.addClass("active");
                showFull();
                showManage();
            } else {
                translateX = 0;
                $("#list").css("transform", "translateX(" + translateX + "px)");
                $("#list .thumbnail").removeClass("active");
                prevElem.addClass("active");
                showFull();
                showManage();
            }
        }
    });
    
    
});