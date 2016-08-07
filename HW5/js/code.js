// Code goes here

function Matrix(n, m)  {
  var rows = n;
  var cols = m;
  var matrix = [];

  this.generate = function() {
    for (var i = 0; i < rows; i++) {
      var tmp = [];
      for (var j = 0; j < cols; j++) {
        tmp.push(Math.round( Math.random() * 1 ))
      }
      matrix.push(tmp);
    }
    return this;
  }
  
  this.sort = function() {
    search.call(Matrix);
    return this;
  }
  
  this.show = function() {
    for (var i = 0; i < rows; i++) {
      console.log(matrix[i].join(" "));
    }
    return this;
  }
  
  function search() {
    for(var i = 0; i < rows-1; i++) {
      for(var j = 0; j < cols-1; j++) {
        var fragment = new Fragment(i, j, matrix);
        //fragment.debug()
        for(var k = 0; k < rows-1; k++) {
          for(var l = 0; l < cols-1; l++) {
            var fragment2 = new Fragment(k, l, matrix);
            if(fragment.compare(fragment2)) {
              //fragment2.debug()
            } 
          }
        }
        if (fragment.compared.length) {
          console.log('replacing...', fragment.compared.length)
          //console.dir(fragment.compared)
          //console.log("count=", fragment.compared.length);
          //fragment.debug()
          buildMap(fragment);
          //console.dir(fragment.map)
          replace(fragment)
          return;
          //return;
          //return;
          //fragment.compared.forEach(function(item) {
            //console.log(item.coords)
          //})
        }
      }
    }
  }
  
  function replace(fragment) {
    var topLeft, topRight, bottomLeft, bottomRight, compared;
    fragment.map.forEach(function(item, i) {
      
      compared = fragment.compared[i];

      // topLeft replacing
      topLeft = matrix[item.topLeft.row][item.topLeft.col];
      //console.log('topLeft=',topLeft)
      matrix[item.topLeft.row][item.topLeft.col] = 
          matrix[compared.coords.topLeft.row][compared.coords.topLeft.col];
      matrix[compared.coords.topLeft.row][compared.coords.topLeft.col] = topLeft;
      // topRight replacing
      topRight = matrix[item.topRight.row][item.topRight.col];
      //console.log('topRight=',topRight)
      matrix[item.topRight.row][item.topRight.col] = 
          matrix[compared.coords.topRight.row][compared.coords.topRight.col];
      matrix[compared.coords.topRight.row][compared.coords.topRight.col] = topRight;
      // bottomLeft replacing
      bottomLeft = matrix[item.bottomLeft.row][item.bottomLeft.col];
      //console.log('bottomLeft=',bottomLeft)
      matrix[item.bottomLeft.row][item.bottomLeft.col] = 
          matrix[compared.coords.bottomLeft.row][compared.coords.bottomLeft.col];
      matrix[compared.coords.bottomLeft.row][compared.coords.bottomLeft.col] = bottomLeft;
      // bottomRight replacing
      bottomRight = matrix[item.bottomRight.row][item.bottomRight.col];
      //console.log('bottomRight=',bottomRight)
      matrix[item.bottomRight.row][item.bottomRight.col] = 
          matrix[compared.coords.bottomRight.row][compared.coords.bottomRight.col];
      matrix[compared.coords.bottomRight.row][compared.coords.bottomRight.col] = bottomRight;
    })
  }
  
  function buildMap(fragment) {
    var topDirection = (rows - 1) - (rows - 1 - fragment.coords.topLeft.row);
    var bottomDirection = (rows - 1) - fragment.coords.bottomLeft.row;
    var leftDirection = (cols - 1) - (cols - 1 - fragment.coords.topLeft.col);
    var rightDirection = (cols - 1) - fragment.coords.topRight.col;
    var fragmentCounter = 0;

    if (topDirection > bottomDirection) {
      if (leftDirection > 1) {
        // fill fragment map with fragments on line, where origin fragment is
        for(var i = 1; i <= Math.floor(leftDirection / fragmentSize); i++ ) {
          if (fragmentCounter >= fragment.compared.length) break;
          var topRight = fragment.coords.topRight.col - i * fragmentSize;
          fragment.map.push({
            topLeft: {row: fragment.coords.topLeft.row, col: topRight - 1},
            topRight: {row: fragment.coords.topRight.row, col: topRight},
            bottomLeft: {row: fragment.coords.bottomLeft.row, col: topRight - 1},
            bottomRight: {row: fragment.coords.bottomRight.row, col: topRight}
          })
          fragmentCounter++;
        }
      }
      // another fragments
      for(var i = topDirection; i > 0; i -= 2) {
        for(var j = cols - 1; j > 0; j -= 2) {
          if (fragmentCounter >= fragment.compared.length) break;
          fragment.map.push({
            topLeft: {row: i - 2, col: j - 1},
            topRight: {row: i - 2, col: j},
            bottomLeft: {row: i - 1, col: j - 1},
            bottomRight: {row: i - 1, col: j}
          })
          fragmentCounter++;
        }
      }
    } else if (topDirection < bottomDirection) {
      if (rightDirection > 1) {
        for(var i = 1; i <= Math.floor(rightDirection / fragmentSize); i++ ) {
          if (fragmentCounter >= fragment.compared.length) break;
          var topLeft = fragment.coords.topLeft.col + i * fragmentSize;
          fragment.map.push({
            topLeft: {row: fragment.coords.topLeft.row, col: topLeft},
            topRight: {row: fragment.coords.topRight.row, col: topLeft + 1},
            bottomLeft: {row: fragment.coords.bottomLeft.row, col: topLeft},
            bottomRight: {row: fragment.coords.bottomRight.row, col: topLeft + 1}
          })
          fragmentCounter++;
        }
      }

      for (var i = fragment.coords.bottomLeft.row + 1; i <= bottomDirection; i+= 2) {
        for (var j = 0; j < cols; j += 2) {
          if (fragmentCounter >= fragment.compared.length) break;
          fragment.map.push({
            topLeft: {row: i, col: j},
            topRight: {row: i, col: j + 1},
            bottomLeft: {row: i + 1, col: j},
            bottomRight: {row: i + 1, col: j + 1}
          })
          fragmentCounter++;
        }
      }
    } else {
      console.log('equals')
    }
  }
  

  function Fragment(row, col, matrix) {
    this.coords = {
      topLeft: {row: row, col: col}, 
      topRight: {row: row, col: col + 1}, 
      bottomLeft: {row: row + 1, col: col}, 
      bottomRight: {row: row + 1, col: col + 1}
    }
    
    this.slices = {
      topLeft: matrix[row][col],
      topRight: matrix[row][col + 1],
      bottomLeft: matrix[row + 1][col],
      bottomRight: matrix[row + 1][col + 1]
    }
    
    // for remembering all fragments that r same to current
    this.compared = []
    
    // path of nearest fragments
    this.map = []
    
    this.compare = function(fragment2) {
      if (noCollision(this, fragment2)) {
        if (isEqual(this, fragment2)) {
          if (this.compared.length) {
            for (var i = 0; i < this.compared.length; i++) {
              if ( !noCollision(this.compared[i], fragment2) ) {
                return false;
              }
            }
            this.compared.push(fragment2);
          } else {
            this.compared.push(fragment2);
          }
          return true;
        }
      } 
      
      return false;
    }
    
    this.debug = function() {
      console.log(row, col, '------')
      console.log(this.slices.topLeft, this.slices.topRight)
      console.log(this.slices.bottomLeft, this.slices.bottomRight)
      console.log('---------')
    }

    function isEqual(fragment1, fragment2) {
      var result = true;
      for (var key in fragment1) {
        if (!equalsSlices(key, fragment1, fragment2)) {
          result = false;
          break;
        }
      }

      return result;
    }
    
    function noCollision(fragment1, fragment2) {
      if (hasRowCollision(fragment1, fragment2)) {
        return false;
      } else if (hasColCollision(fragment1, fragment2)) {
        return false;
      } else if (hasDiagonalCollision(fragment1, fragment2)) {
        return false;
      } else if (hasFullCollision(fragment1, fragment2)) {
        return false;
      } else {
        return true;
      }
    }
    
    function hasRowCollision(fragment1, fragment2) {
      var onX = fragment1.coords.topRight.row === fragment2.coords.topLeft.row;
      var onY = (fragment1.coords.topRight.col === fragment2.coords.topLeft.col) || 
      (fragment1.coords.topLeft.col === fragment2.coords.topRight.col);

      if (onX && onY) {
        return true;
      } else {
        return false;
      }
    }
    
    function hasColCollision(fragment1, fragment2) {
      var onX = (fragment1.coords.bottomLeft.row === fragment2.coords.topLeft.row) ||
      (fragment1.coords.topLeft.row === fragment2.coords.bottomLeft.row);
      var onY = fragment1.coords.bottomLeft.col === fragment2.coords.topLeft.col;
      
      if (onX && onY) {
        return true;
      } else {
        return false;
      }
    }
    
    function hasDiagonalCollision(fragment1, fragment2) {
      var onX = (fragment1.coords.bottomLeft.row === fragment2.coords.topLeft.row) ||
      (fragment1.coords.topLeft.row === fragment2.coords.bottomLeft.row);
      var onY = (fragment1.coords.bottomRight.col === fragment2.coords.topLeft.col) || 
          (fragment1.coords.bottomLeft.col === fragment2.coords.topRight.col) ||
          (fragment1.coords.topLeft.col === fragment2.coords.bottomRight.col) ||
          (fragment1.coords.topRight.col === fragment2.coords.bottomLeft.col);
      
      if (onX && onY) {
        return true;
      } else {
        return false;
      }
    }
    
    function hasFullCollision(fragment1, fragment2) {
      var onX = fragment1.coords.topRight.row === fragment2.coords.topLeft.row;
      var onY = fragment1.coords.topRight.col === fragment2.coords.topRight.col;

      if (onX && onY) {
        return true;
      } else {
        return false;
      }
    }

    function equalsSlices(key, fragment1, fragment2) {
      var result = true;
      if (key == "slices") {
        for(var key2 in fragment1[key]) {
          if (fragment1[key][key2] !== fragment2[key][key2]) {
            result = false;
            break;
          }
        }
      }

      return result;
    }
    
  }

}

var matrix = new Matrix(20, 20);
matrix.generate().show().sort().show()


