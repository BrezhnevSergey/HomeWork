// Code goes here

//my 

/*var arr = [3, 6, 24, 17, 77, 88, 12, 44, 23, 11];
console.log("Unsort " + arr);
console.log(arr.sort(function (a,b){
  if (a % 2 == b % 2) {
    return 0;
  } else {
    if (!(a % 2) && (b %  2)) {
      return -1;     
    } else {
      return 1;
    }
  }
}));*/


//teacher 
var arr = [3, 6, 24, 17, 77, 88, 12, 44, 23, 11];
console.log("Unsort " + arr);
console.log(arr.sort(function (a,b){
  return Math.abs(a % 2) - Math.abs(b % 2);
}));


>>>>>>> d5458acb237a28334e0ac177268f5524a2ccbb55
/*function getFileExtension(fileName){
  for (var i=fileName.length-1; i>=1; i--){
    if(fileName[i]=="."){
      return fileName.slice(i-(fileName.length-1));
    }
  }
  return "no extension";
}*/

//или
/*

=======

/*
>>>>>>> d5458acb237a28334e0ac177268f5524a2ccbb55
function getFileExtension(fileName){
  var index = fileName.lastIndexOf(".")
   if (index <= 0) {
    return "no extension";
  } else {
    return fileName.slice(index - (fileName.length-1));
  }
}

console.log(getFileExtension("readsdfgdsghf345345d.psd"));
*/