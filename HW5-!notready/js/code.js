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
  
  this.show = function() {
    for (var i = 0; i < rows; i++) {
      console.log(matrix[i].join(" "));
    }
    return this;
  }
  
  this.


  
}

var matrix = new Matrix(5, 5);
matrix.generate().show();


