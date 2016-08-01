/*var str = "ёрш, метла, апельсин, зеркало, Коля";
console.log("Input string: " + str)
var arr = str.split(', ');
arr.sort(function (a, b) {
  var aCharCode = a.toLowerCase().replace('ё','е'+String.fromCharCode(1113));
  var bCharCode = b.toLowerCase().replace('ё','е'+String.fromCharCode(1113));
  if (aCharCode > bCharCode) return 1;
  if (aCharCode < bCharCode) return -1;
  else return 0;})
var newStr = arr.join(",");
console.log("Output sort string: " + newStr);
*/

function generateArray(row, columns) {
  var arr=[];
  for(var i = 0; i <= row - 1; i++) {
    arr[i] = [];
    for(var j = 0; j <= columns - 1; j++){
      arr[i][j] = Math.round(Math.random() * 10);
    }
  }
  return arr;
}

function printArray(arr) {
  for(var i = 0; i <= array.length - 1; i++) {
    for(var j = 0; j <= array.length - 1; j++){
      document.write(array[i][j] + " ");
      if(j == array.length - 1) document.write("</br>");
    }
  } 
  document.write("</br></br>");
} 

function sortArray() {

}


var array = generateArray(8, 8);
printArray(array);