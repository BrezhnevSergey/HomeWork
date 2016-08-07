/*var userName, age, isRead;

while(!userName) {
	userName = prompt("Please, enter your name: ");
}

while(isNaN(age)) {
	age = prompt("Please, enter your age:");
	if(age < 1 || age > 120) {
	  age = NaN;
	}
}
isRead = confirm("Did you read agreemnet?");
if (isRead) {
	alert(userName + ", you are the first who read agreement");
} else {
	alert("You like 99.99% people, " + userName);
}*/


/*var someThing = prompt("Please enter something, and i will try guess:").split(" ");
if(isNaN(someThing) || someThing == "" || someThing == null || someThing == " ") {
	alert("It is something else");
} else {
	alert("It is digit!");
}*/
var someThing = prompt("Please enter something, and i will try guess:");
if(typeof +someThing == "number") {
	alert("It is digit!");
} else {
	alert("It is something else");
}