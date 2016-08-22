



function invertDocument(element) {
	var array = [];	
	var string = "";

	if(!isElement(element)) return 0;

	function isElement(element) {
		if(element == undefined) {
			console.log("Нет такого узла");
			return false;
		}
		return true;
	}
	
	function readParent(element) {
		if(element == document.body) {
			return;
		} else {
			array.push(element.tagName.toLowerCase());
			element = element.parentElement;
			readParent(element);
		}
	}

	function writeHTML(){
		array.forEach(function (item) {
			string += "\<" + item + "\>";
		});
		for (var i = array.length - 1 ; i >= 0; i--)
			string += "\<\/" + array[i] + "\>";
	}

	readParent(element);
	writeHTML();
	document.body.innerHTML = string;
}


var element = document.body.children[0].children[0].children[0].children[0];
invertDocument(element);
