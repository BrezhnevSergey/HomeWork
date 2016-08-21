

var element = document;

function printTagMap(element) {

var result = ["["];

	function tagMap(element) {

		function map(element) {

			for(var i = 0; i <= element.children.length; i++){				
				if(i == element.children.length) {
					result.push("]");
				}
				else {
					var innerElement = element.children[i];
					result.push(innerElement.tagName);
					if(innerElement.children.length > 0) {
						result.push("[");
						map(innerElement);
					} 
				}
			}
		}

		map(element);
		var resultStr = result.join(" ");
		console.log(resultStr);		
	}
	
	return tagMap;	
}


var print = printTagMap();
print(element);
