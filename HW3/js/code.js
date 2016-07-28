// Code goes here

/*function getFileExtension(fileName){
  for (var i=fileName.length-1; i>=1; i--){
    if(fileName[i]=="."){
      return fileName.slice(i-(fileName.length-1));
    }
  }
  return "no extension";
}*/

//или


function getFileExtension(fileName){
  var index = fileName.lastIndexOf(".")
   if (index <= 0) {
    return "no extension";
  } else {
    return fileName.slice(index - (fileName.length-1));
  }
}

console.log(getFileExtension("readsdfgdsghf345345d.psd"));
