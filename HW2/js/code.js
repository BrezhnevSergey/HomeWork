/*var elMargin;
var browserName;
function askBrowser(){
	browserName = prompt("Enter name of your browser:");
	if (browserName == null) {
		return 0;
	} else if( +browserName == 0){
		return askBrowser();
	} else {
		browserName = browserName.toLowerCase();
		changeMargin(browserName);
	}
}

function changeMargin(browser) {
var el = document.getElementById('test');
	switch(browser) {
		case "chrome":
			el.style.margin = 10 + "px";
			elMargin = "10px";
			break;
		case "firefox":
			el.style.margin = 20 + "px";
			elMargin = "20px";
			break;
		case "safari":
			el.style.margin = 30 + "px";
			elMargin = "30px";
			break;
		case "opera":
			el.style.margin = 40 + "px";
			elMargin = "40px";
			break;
		case "ie":
			el.style.margin = 50 + "px";
			elMargin = "50px";
			break;
		default:
			el.style.margin = 100 + "px";
			elMargin = "100px";
	}
}

askBrowser();
console.log(elMargin);

*/
/*var userName, age, isRead;

function askName(){
	if (!(userName = prompt("Please, enter your name: ", ""))) {
		return askName();
	} else {
		return userName;
	}
}
function askAge(){
	age = prompt("Please, enter your age:", "");
	if(isNaN(age) || age < 1 || age > 120) {
		return askAge();
	} else {
		return age;
	}
}
console.log(askName());
console.log(askAge());
isRead = confirm("Did you read agreemnet?");
if (isRead) {
	alert(userName + ", you are the first who read agreement");
} else {
	alert("You like 99.99% people, " + userName);
}*/


/*
function showMenu() {
	switch(prompt ("Enter item of menu(1-3):", "")) {
		case "1":
			console.log("You chose Item 1");
			subMenu1();
			break;
		case "2":
			console.log("You chose Item 2");
			subMenu2();
			break;
		case "3":
			console.log("You chose Item 3");
			subMenu3();
			break;
		case null:
		case "":
			if (confirm("Do you finish work with main menu?")) {
				break;
			} else {
				return showMenu();
			}
		default:
			return showMenu();
	}
}

showMenu();

function subMenu1() {
	switch(prompt("Enter submenu(1-3) in Item 1:")) {
		case "1":
			console.log("You chose subItem1 in Item1");
			break;
		case "2":
			console.log("You chose subItem2 in Item1");
			break;
		case "3":
			console.log("You chose subItem3 in Item1");
			break;
		case null:
		case "":
			if (confirm("Do you finish work with submenu in Item1?")) {
				return showMenu();
			} else {
				return subMenu1();
			}
		default:
			return subMenu1();
	}
}

function subMenu2() {
	switch(prompt("Enter submenu(1-4) in Item 2:")) {
		case "1":
			console.log("You chose subItem1 in Item2");
			break;
		case "2":
			console.log("You chose subItem2 in Item2");
			break;
		case "3":
			console.log("You chose subItem3 in Item2");
			break;
		case "4":
			console.log("You chose subItem4 in Item2");
			break;
		case null:
		case "":
			if (confirm("Do you finish work with submenu in Item2?")) {
				return showMenu();
			} else {
				return subMenu2();
			}
		default:
			return subMenu2();
	}
}

function subMenu3() {
	switch(prompt("Enter submenu(1-2) in Item 3:")) {
		case "1":
			console.log("You chose subItem1 in Item3");
			break;
		case "2":
			console.log("You chose subItem2 in Item3");
			break;
		case null:
		case "":
			if (confirm("Do you finish work with submenu in Item3?")) {
				return showMenu();
			} else {
				return subMenu3();
			}
		default:
			return subMenu3();
	}
}*/



//teacher  variant
function showMenu() {
	switch(prompt("Enter item menu:")) {
		case "1":
			break;
		case "2":
			break;	
	}
	if(!confirm("Exit")) {
		showMenu();
	}
}

function showSubMenu() {
	if(prompt("Enter your favorite color:")) {
		if (confirm("Save?")) return;
		else showSubMenu()
	} else {
		//
	}

	if (confirm("Save?")) {
		return;
	} else {
		showSubMenu();
	}
}
showMenu();