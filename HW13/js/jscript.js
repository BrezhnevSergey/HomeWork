// Code goes here

$(function() {
    var canvas = $("canvas")
    var context = canvas.get(0).getContext("2d")
    var isDrag = false;

    var cubes = [];
    var currentCube = {};

    canvas.on("mousedown", function(e) {
        isDrag = true;
        checkClick(e.offsetX, e.offsetY);
    })
  
    canvas.on("mousemove", function(e) {
        if (isDrag) {
            changeCoords(currentCube, e.offsetX, e.offsetY);
            draw();
        }
    })

    canvas.on("mouseup", function(e) {
        isDrag = false;
        currentCube = {};
    })

    function checkClick(x, y) {
        for(index in cubes) {
            if(x >= cubes[index].x && x <= cubes[index].x + cubes[index].width) {
                if (y >= cubes[index].y && y <= cubes[index].y + cubes[index].height) {
                    currentCube = cubes[index];
                    currentCube.index = index;
                    currentCube.shiftX = x - cubes[index].x;
                    currentCube.shiftY = y - cubes[index].y;
                }
            }
        }
    }

    function changeCoords(obj, x, y) {
        if(isDrag) {
            if ( (x - obj.shiftX >= 0) && (y - obj.shiftY >= 0) && 
                ((x + (obj.width - obj.shiftX)) <= map.width) && ((y + (obj.height - obj.shiftY)) <= map.height) ) {
                obj.x = x - obj.shiftX;
                obj.y = y - obj.shiftY;

                if (collision(obj)) {
                    if (obj.collLeft) {
                        console.log("obj.collLeft = " + obj.collLeft);
                        if (cubes[obj.collCube].x > (cubes[obj.collCube].width / 2) ) {
                            cubes[obj.collCube].x -= (cubes[obj.collCube].width / 2);    
                        } else if (cubes[obj.collCube].x < cubes[obj.collCube].width ) {
                            cubes[obj.collCube].x = 0;
                        }
                        obj.collLeft = false;
                    }
                    if (obj.collRight) {
                        console.log("obj.collRight = " + obj.collRight);
                        if ( (cubes[obj.collCube].x + (cubes[obj.collCube].width / 2) ) < (map.width - cubes[obj.collCube].width ) ) {
                            cubes[obj.collCube].x += (cubes[obj.collCube].width / 2 );
                        } else {
                            cubes[obj.collCube].x = map.width - cubes[obj.collCube].width;
                        }
                        obj.collRight = false;
                    }
                    if (obj.collDown) {
                        console.log("obj.collDown = " + obj.collDown);
                        if ( (cubes[obj.collCube].y + (cubes[obj.collCube].height / 2) ) < (map.height - cubes[obj.collCube].height ) ) {
                            cubes[obj.collCube].y += (cubes[obj.collCube].height / 2 );
                        } else {
                            cubes[obj.collCube].y = map.height - cubes[obj.collCube].height;
                        }   
                        obj.collDown = false;
                    }
                    if (obj.collTop) {
                        console.log("obj.collTop = " + obj.collTop);
                        if (cubes[obj.collCube].y > (cubes[obj.collCube].height / 2) ) {
                            cubes[obj.collCube].y -= (cubes[obj.collCube].height / 2);
                        } else {
                            cubes[obj.collCube].y = 0;
                        }
                        obj.collTop = false;
                    }
                }
            }
        }
    }
    function collision(obj) {
        //var XColl = false;
        //var YColl = false;
        for (var i = 0; i < cubes.length; i++) {
            if (i != obj.index) {
                if ( (obj.x + obj.width >= cubes[i].x) && (obj.x <= cubes[i].x + cubes[i].width) ) {
                    if ( ((obj.y + obj.height) >= cubes[i].y && ((obj.y + obj.height) <= (cubes[i].y + cubes[i].height / 2) ) ) )  {
                        console.log("obj.collDown")
                        obj.collDown = true;
                        obj.collLeft = obj.collRight = obj.collTop = false;
                    }
                    if ( (obj.y <= (cubes[i].y + cubes[i].height)) && ( (obj.y ) >= (cubes[i].y - ( cubes[i].height / 2) ) ) ) {
                        console.log("obj.collTop");
                        obj.collTop = true;
                        obj.collRight = obj.collDown = obj.collLeft = false;
                    }
                }
                if ( (obj.y + obj.height >= cubes[i].y) && (obj.y <= cubes[i].y + cubes[i].height) ) {
                    if ( ((obj.x + obj.width) >= cubes[i].x) && ((obj.x + obj.width) <= (cubes[i].x + (cubes[i].width / 2 ) ) ) ) {
                        console.log("obj.collRight");
                        obj.collRight = true;
                        obj.collLeft = obj.collDown = obj.collTop = false;
                    }
                    if ( (obj.x <= (cubes[i].x + cubes[i].width)) && (obj.x >= (cubes[i].x - (cubes[i].width / 2) ))  ) {
                        console.log("obj.collLeft");
                        obj.collLeft = true;
                        obj.collTop = obj.collDown = obj.collRigth = false;
                    }
                }
                if (obj.collTop || obj.collDown || obj.collLeft || obj.collRight) {
                    obj.collCube = i;
                    return true;
                } 
            } else {
                continue;
            }
        }
    }      
                /*if ( (obj.x + obj.width >= cubes[i].x) && (obj.x <= cubes[i].x + cubes[i].width) ) { 
                    if ( (obj.x > cubes[i].x) && (obj.x < cubes[i].x + cubes[i].width) ) {
                        obj.collLeft = true;
                    }
                    if ( (obj.x < cubes[i].x) && (obj.x + obj.width > cubes[i].x) ) {
                        obj.collRight = true;
                    }
                    XColl = true;
                }
                if ( (obj.y + obj.height >= cubes[i].y) && (obj.y <= cubes[i].y + cubes[i].height) ) {
                    if ( (obj.y > cubes[i].y) && (obj.y < cubes[i].y + cubes[i].height) ) {
                        obj.collDown = true;
                    }
                    if ( (obj.y < cubes[i].y) && (obj.y + obj.height > cubes[i].y) ) {
                        obj.collTop = true;
                    }
                    YColl = true;
                }
                if( XColl && YColl ) {
                    obj.collCube = i;
                    return true;
                    //console.log("obj")
                    //console.log("Crash obj[" + obj.index + "],obj.x=" + obj.x +",obj.y=" + obj.y + 
                        //" with obj[" + i + "],obj[" + i + "].x=" + cubes[i].x + ",obj[" + i + "].y=" + cubes[i].y);
                } else {
                    XColl = false;
                    YColl = false;
                }*/

      
    function Entity(color, x, y, width, height) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.draw = function() {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
      }
      
    function draw() {
        map.draw();
        for (var i = 0; i < cubes.length; i++) {
            cubes[i].draw()
        }
    }
      
    var map = new Entity("white", 0, 0, canvas.width(), canvas.height());
    var cube0 = new Entity("red", 15, 15, 30, 30);
    var cube1 = new Entity("blue", 50, 50, 30, 30);
    var cube2 = new Entity("green", 50, 110, 30, 30);

    cubes.push(cube0);
    cubes.push(cube1);
    cubes.push(cube2);
    
    draw();
});
