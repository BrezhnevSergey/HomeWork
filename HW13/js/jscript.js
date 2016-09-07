// Code goes here

$(function() {
    var canvas = $("canvas")
    var context = canvas.get(0).getContext("2d")
    var isDrag = false;

    var cubes = []
    var currentCube = null;
    
    var xColl = false;
    var yColl = false;

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
        currentCube = null;
    })

    function checkClick(x, y) {
        for(index in cubes) {
            if(x >= cubes[index].x && x <= cubes[index].x + cubes[index].width) {
                if (y >= cubes[index].y && y <= cubes[index].y + cubes[index].height) {
                    //console.log(cubes[index].color)
                    currentCube = cubes[index];
                }
            }
        }
    }

    function changeCoords(obj, x, y) {
        if ( ((x + cube.width) >= cube1.x) && (x <= (cube1.x + cube1.width)) ) { xColl = true; console.log("xCollision"); }
        if ( ((y + cube.height) >= cube1.y) && (y <= (cube1.y + cube1.height)) ) { yColl = true; console.log("yCollision"); }
        
        if (xColl&&yColl){console.log("Crash!!!!");}
            
        obj.x = x;
        obj.y = y;
        
    }
      
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
        cube.draw();
        cube1.draw();
    }
      
    var map = new Entity("white", 0, 0, canvas.width(), canvas.height());
    var cube = new Entity("red", 15, 15, 30, 30);
    var cube1 = new Entity("blue", 50, 50, 30, 30);

    cubes.push(cube);
    cubes.push(cube1);
    
    cube.draw(15, 15);
    cube1.draw(50, 50);
});
