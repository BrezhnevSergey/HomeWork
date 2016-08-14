// Code goes here
var text = document.getElementById("text").innerText;

function run() {
  var objects = []; // каждый вызов рекурсии перезатрет эту переменную, вспоминаем замыкания
  var func = function() {
    // prompt("Введите регулярочку")
    var str = prompt("Enter RegExp:");
    // проверить регулярку с помощью Validator
    if(Validator.checkRegExp(str)) {
      // создать регулярку с помощью Constructor
      var regexp = Constructor.generateRegExp(str);
      // если регулярка создана - передать ее в Parser.factory,
      var parser = new Parser();
      var element = Parser.factory(regexp);
      // который в свою очередь вернет новый объект
      // новый объект надо запушить в массив objects
      objects.push(element);
      // функция должна запросить конфирм, если юзер продолжает - функция вызывается снова
      if(!confirm("Do you finish?")) {
        return func();
      } else { // иначе - перебрать массив objects в цикле и для каждого объекта вызвать рандомный метод
        objects.forEach(function(item){
          var randMethod = getRandomMethod(item);
          console.log(item[randMethod]());

        });
      }

    } else {
      alert("It is not a RegExp.");
      return func();
    }
  }
  return func;
  // затем завершить работу функции
  // Validator, Constructor - см. ниже
}
//-------------------------------------
function Parser() {
  this.type = "Abstract parser"
}

Parser.factory = function(re) {
  // этот статический метод вызывает Validator.checkText
  // далее, в зависимости от того, одно слово пришло или несколько
  // нужно создать соответствующий SingleWordParser или
  // MultiWordParser
  var resultArray = Validator.checkText(re);
  if (resultArray == null) return {};
  if (resultArray.length > 1)
    var resObj = new MultiWordParser(resultArray);
  else {
    var resObj = new SingleWordParser(resultArray);
  }
  
  return resObj;
}

// это надо унаследовать в остальных конструкторах типа Parser
Parser.prototype.log = function() {
  console.log("[" + this.type + "]")
}

function SingleWordParser(word) {
  this.type = "Single Word Parser"
  this.word = word
  
  this.lastCharToUpper = function() {
    // этот метод должен вернуть новое слово, последняя буква которого должна
    // быть возведена в верхний регистр
    return word[0].slice(0, word[0].length - 1) + word[0].slice(-1).toUpperCase();
  }
}

function MultiWordParser(words) {
  this.type = "Multi Word Parser"
  this.words = words
  
  this.firstCharToUpper = function() {
    // этот метод должен вернуть слова, предварительно переведя первую букву
    // каждого слова в верхний регистр
    // если первая буква является цифрой - завернуть ее в кавычки (если успеваете)
    var nWords = words.map(function(item, i, arr){
      if(isNaN(item.slice(0,1))) {
         return (item.slice(0,1)).toUpperCase() + item.slice(1);
      } else {
        return "\"" + item.slice(0,1) + "\"" + item.slice(1);
      }
    });

    //return nWords;
    return 

  }
  
}
//--------------------------------------------
// это функция, содержащая набор статических методов для валидации
function Validator() {}

// проверка регулярки
Validator.checkRegExp = function(string) {
  // проверяем, что string является регуляркой, т.е. подходит под шаблон
  var regExpTamplate = /^\/.+\/(?:([gmi])(?!.*?\1))*$/;
  return regExpTamplate.test(string);
}

// ищем в тексте (var text в верху страницы) совпадающие фрагменты с помощью 
// регулярки и возвращаем эти фрагменты
Validator.checkText = function(re) {
  return text.match(re);
}

//------------------------------------


// функция, содержащая набор методов для создавания чего-то
function Constructor() {}

// этот метод позволяет создать регулярку
Constructor.generateRegExp = function(string) {
  // перед тем, как создавать, желательно сделать проверку через Validator
  // является ли string - регуляркой
  // hint: надо взять строку между первым и последним слешами
  var pattern = string.slice(1, string.indexOf("/", 1));
  var flags = string.slice(string.indexOf("/", 1) + 1);
  var re = new RegExp(pattern, flags)
  
  return re;
}

function getRandomMethod(obj) {
  var keys = Object.keys(obj);
  var randFunc = function(obj) {
    // получаем случайный ключ объекта
    var randProp = Math.floor(Math.random() * keys.length);
    if( typeof(obj[keys[randProp]]) === "function" ) {
      return keys[randProp];
    } else {
      return randFunc(obj);
    }
  }
  var randomFunc = randFunc;
  var randomMathod = randomFunc(obj);
  return randomMathod;
   // если то, что находится по этому ключу - свойство, тогда
  // вызываем функцию снова, иначе возвращаем имя полученного ключа
  // который будет являться методом
}

// и вызываем нашу рекурсивную функцию

var runn = run();
runn();
