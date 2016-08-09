
function sum(num1) {
  var result = num1;
  function func(num2) {
      result += num2;
      return func;
    };
    func.toString = function(){return result;};
  return func;
}

console.log(sum(1)(2));
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8));