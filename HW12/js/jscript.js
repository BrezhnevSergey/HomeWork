
window.onload = function() {
	var formOb = document.getElementById("form");
	var loginOb = document.getElementById("login");
	var emailOb = document.getElementById("email");
	var pswOb = document.getElementById("psw");
	var submitOb = document.getElementById("send");

	form.addEventListener("blur", handler, true);
	form.addEventListener("submit", checkInputFields);

	function handler(e){
		var target = e.target;
		var loginRegExp = /^\w{3,20}$/;
		var emailRegExp = /^[-\w.]+@([A-z0-9]+\.)+[A-z]{2,4}$/;
		var pswRegExp = /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		
		if(target.id == "login") {
			var login = loginOb.value;
			if( login == "" || !(loginRegExp.test(login)) ) {
				loginOb.classList.add("error");
			} else {
				loginOb.classList.remove("error");
			}
		}

		if(target.id == "email") {
			var email = emailOb.value;
			if( email == "" || !(emailRegExp.test(email)) ) {
				emailOb.classList.add("error");
			} else {
				emailOb.classList.remove("error");
			}
		}

		if(target.id == "psw") {
			var psw = pswOb.value;
			if ( psw == "" || !(pswRegExp.test(psw)) ) {
				pswOb.classList.add("error");
			} else {
				pswOb.classList.remove("error");
			}
		}

	}

	function checkInputFields(e) {
		if(login.value == "") {
			login.classList.add("error");
			e.preventDefault();
		}
		if (email.value == "") {
			email.classList.add("error");
			e.preventDefault();
		}
		if (psw.value == "") {
			psw.classList.add("error");
			e.preventDefault();
		}
	return true;
	}

}
	

