
var str = "Lorem,ipsum,dolor,sit,amet,secte,uer,ad,scing,elit,sedam,nonumy,nibh,euismod,tdunt,ut,laoreet,dolmagna,quam,erat,volu,pat,Ut,wisi,ad,minim,veniam,quis,nostru,xerctation,ullamcorper,susc,lobortis,nis,ut,aliuip,ex,ea,consequat";
console.log("Input string: " + str)
var arr = str.split(',');
arr.sort();
var newStr = arr.join(",");
console.log("Output sort string: " + newStr);