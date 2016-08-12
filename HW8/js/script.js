// Code goes here
var text = document.getElementById("text").innerText;

function run() {
  var objects = []; // каждый вызов рекурсии перезатрет эту переменную, вспоминаем замыкания
  // prompt("Введите регулярочку")
  var regExp = prompt("Enter RegExp:");
  // проверить регулярку с помощью Validator
  if(regExp && Validator.checkRegExp(regExp)) {
    console.log("helo");
  }

  
  // создать регулярку с помощью Constructor
  // если регулярка создана - передать ее в Parser.factory,
  // который в свою очередь вернет новый объект
  // новый объект надо запушить в массив objects
  // функция должна запросить конфирм, если юзер продолжает - функция вызывается снова
  // иначе - перебрать массив objects в цикле и для каждого объекта вызвать рандомный метод
  // затем завершить работу функции
  // Validator, Constructor - см. ниже
}

function Parser() {
  this.type = "Abstract parser"
}

Parser.factory = function(re) {
  // этот статический метод вызывает Validator.checkText
  // далее, в зависимости от того, одно слово пришло или несколько
  // нужно создать соответствующий SingleWordParser или
  // MultiWordParser
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
  }
}

function MultiWordParser(words) {
  this.type = "Multi Word Parser"
  this.words = words
  
  this.firstCharToUpper = function() {
    // этот метод должен вернуть слова, предварительно переведя первую букву
    // каждого слова в верхний регистр
    // если первая буква является цифрой - завернуть ее в кавычки (если успеваете)
  }
  
}

// это функция, содержащая набор статических методов для валидации
function Validator() {}

// проверка регулярки
Validator.checkRegExp = function(string) {
  // проверяем, что string является регуляркой, т.е. подходит под шаблон

  return true;
}

// ищем в тексте (var text в верху страницы) совпадающие фрагменты с помощью 
// регулярки и возвращаем эти фрагменты
Validator.checkText = function(re) {
}

// функция, содержащая набор методов для создавания чего-то
function Constructor() {}

// этот метод позволяет создать регулярку
Constructor.generateRegExp = function(string) {
  // перед тем, как создавать, желательно сделать проверку через Validator
  // является ли string - регуляркой

  // hint: надо взять строку между первым и последним слешами
  var pattern;
  var flags;
  var re = new RegExp(pattern, flags)
  
  return re;
}

function getRandomMethod() {
  // получаем случайный ключ объекта
  // если то, что находится по этому ключу - свойство, тогда
  // вызываем функцию снова, иначе возвращаем имя полученного ключа
  // который будет являться методом
}

// и вызываем нашу рекурсивную функцию

run();