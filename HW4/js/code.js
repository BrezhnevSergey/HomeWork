
var str = "Lorem,ipsum,dolor,sit,amet,secte,uer,ad,scing,elit,sedam,nonumy,nibh,euismod,tdunt,ut,laoreet,dolmagna,quam,erat,volu,pat,Ut,wisi,ad,minim,veniam,quis,nostru,xerctation,ullamcorper,susc,lobortis,nis,ut,aliuip,ex,ea,consequat";
var arr = str.split(',');
console.log(arr);
arr.sort();
var newStr = arr.join(",");
console.log(newStr);