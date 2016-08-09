function sum(num1) {
  var result = num1;
  function func(num2) {
      result += num2;
      return func;
    };
    func.toString = function(){return result;};
  return func;
}

//teacher
function calc(arg) {
	var sum	= arg;
	return function(arg) {
		return (arg) ? calc( sum += arg ) : sum;
	}
}

console.log(sum(1)(2));
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8));

console.log(calc(1)(2));
console.log(calc(1)(2)(3)(4)(5)(6)(7)(8));