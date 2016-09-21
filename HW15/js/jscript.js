
$(document).ready(function() {
    var arrayPicSize = [];
    var allPicWidth = 0;
    var preiewWidth = $(".gallery .preview").innerWidth();
    var elemMargin = 0;
    var translateX = 0;
    var picCount = 0;

    $('#fileupload').on('change', function(e) {
        var files = e.target.files;
        for (var i = 0, file; file = files[i]; i++) {
            if(!file.type.match('image/*')) {
                continue;
            }
            var fileRead = new FileReader();
            fileRead.onload = (function(theFile) {
                return function(ev) {
                    var newElem = '<img class="thumbnail" src="' + ev.target.result + '" title = "' + escape(theFile.name) +'" />';
                    $(".preview #list").append(newElem);
                    var size = $("#list .thumbnail:last").outerWidth();
                    elemMargin = parseInt($("#list .thumbnail:last").css("margin-right"));
                    arrayPicSize.push(size + elemMargin);
                    totalPicWidth(arrayPicSize);
                    picCount = arrayPicSize.length;
                    if(!hasActive()) {
                        var acvElem = $("#list .thumbnail:first");
                        setActive(acvElem);  
                        activateDelButton();
                    }
                    showFull();
                    showManage();
                }; 
            })(file);
            fileRead.readAsDataURL(file);
        }
    });

    $(".gallery .next").on("click", moveNext);
    $(".gallery .prev").on("click", movePrev);

    function totalPicWidth(arr) {
        if(arr.length) {
            allPicWidth = arr.reduce(function(a,b) {
                return a + b;
            });
        } else {
            allPicWidth = 0;
        }
    }

    function activateDelButton() {
        $("#delete").css("cursor", "pointer").on("click", removeImg);
        $("#delete").parent().animate({opacity: "1"}, 1100);
    }

    function deActivateDelButton() {
        $("#delete").css("cursor", "default").off("click", removeImg);
        $("#delete").parent().animate({opacity: "0.3"});
    }

    function hasActive() {
        if($("#list .thumbnail").hasClass("active")) {
            return true;
        }
        return false;
    }

    function setActive(elem) {
        elem.addClass("active");
    }

    function removeActive(elem) {
        elem.removeClass("active");
    }

    function showFull() {
        $("#fullSize").css("visibility", "visible").animate({opacity: 1}, 200);
        var imgSrc = $("#list .active").attr("src");
        var imgTitle = $("#list .active").attr("title");
        var newElem = '<img src="' + imgSrc + '" title = "' + imgTitle +'" />';
        $("#fullSize img").replaceWith(newElem);
        $("#fullSize img").css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 300);
    }

    function hideFull() {
         $("#fullSize img").animate({
                    opacity: 0
                    }, 200,
                    function() {
                       $(this).parent().css("visibility", "hidden");
                       $(this).attr({"src": "", "title": ""});
                    });
    }

    function isHasPrev() {
        if(($("#list .active").prev()).length) {
          return $("#list .active").prev();  
        } 
        return false;
    }

    function isHasNext() {
        if(($("#list .active").next()).length) {
          return $("#list .active").next();  
        } 
        return false;        
    }

    function showManage() {
        if(picCount >= 1) {
            if(isHasNext()) {
                $(".gallery .next").css("cursor", "pointer").animate({opacity: "1"}, 300);

            } else {
                $(".gallery .next").animate({
                    opacity: 0
                    }, 300,
                    function() {
                       $(this).css("cursor", "default");
                    });
            }
            if (isHasPrev()) {
                $(".gallery .prev").css("cursor", "pointer").animate({opacity: "1"}, 300);
            } else {
                $(".gallery .prev").animate({
                        opacity: 0
                    }, 300, 
                    function() {
                        $(this).css("cursor", "default");
                    });
            }
        }
    }

   function removeImg(){
        var nextElem = isHasNext();
        var prevElem = isHasPrev();
        var currentElemWidth = $("#list .active").outerWidth();
        if(nextElem || prevElem) {
            if(nextElem) {
                removeItem();
                setActive(nextElem);
                if( (translateX < 0) && (allPicWidth + translateX < preiewWidth) ) {
                    translateX = translateX + currentElemWidth;
                    $("#list").css("transform", "translateX(" + translateX + "px)");
                }
            } else if(!nextElem && prevElem) {
                removeItem();
                setActive(prevElem);
            }
            showFull();
            showManage();
        } else {
            removeItem();
            hideFull();
        } 
        
        if(!hasActive()){
            deActivateDelButton();
        }
        function removeItem(){
            currentElemWidth = currentElemWidth + elemMargin;
            $("#list .active").remove();
            var index = arrayPicSize.indexOf(currentElemWidth);
            arrayPicSize.splice(index, 1);
            totalPicWidth(arrayPicSize);
            picCount--;
        }
    }

    

    function moveNext() {
        var nextElem = isHasNext();
        if(nextElem){
            var currentElemWidth = $("#list .active").outerWidth();
            translateX -= currentElemWidth + elemMargin;
            if(translateX <= preiewWidth - allPicWidth) {
                translateX = preiewWidth - allPicWidth - 3;
                $("#list").css("transform", "translateX(" + translateX + "px)");
                removeActive($("#list .thumbnail"));
                setActive(nextElem);
                showFull();
                showManage();
            } else {
                $("#list").css("transform", "translateX(" + translateX + "px)");
                removeActive($("#list .thumbnail"));
                setActive(nextElem);
                showFull();
                showManage();
            }
        }
    }


    function movePrev(){
        var prevElem = isHasPrev();
        if(prevElem){
            var prevElemWidth = prevElem.outerWidth();
            translateX += prevElemWidth + elemMargin;
            if(translateX < 0) {
                $("#list").css("transform", "translateX(" + translateX + "px)");
                removeActive($("#list .thumbnail"));
                setActive(prevElem);
                showFull();
                showManage();
            } else {
                translateX = 0;
                $("#list").css("transform", "translateX(" + translateX + "px)");
                removeActive($("#list .thumbnail"));
                setActive(prevElem);
                showFull();
                showManage();
            }
        }
    }
    
    
});