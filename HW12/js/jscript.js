
window.onload = function() {
	var form = document.getElementById("form");
	var login = document.getElementById("login");
	var email = document.getElementById("email");
	var psw = document.getElementById("psw");
	var sub = document.getElementById("send");
	var inputs = document.getElementById("form").querySelectorAll("input");
	//console.log(inputs);
/*	login.addEventListener("blur", checkLogin);
	email.addEventListener("blur", checkMail);
	psw.addEventListener("blur", checkPsw);

	function checkLogin(e) {
		console.log(this.value);
		console.log(this.type)
	}*/
	//input.addEventListener("blur", handler);
	form.addEventListener("blur", handler, true);
	form.addEventListener("submit", checkInputFields);

	function handler(e){
		var target = e.target;
		var loginRegExp = /^\w{3,20}$/;
		var emailRegExp = /^[-\w.]+@([A-z0-9]+\.)+[A-z]{2,4}$/;
		var pswRegExp = /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		
		if(target.id == "login") {
			var log = login.value;
			var res = loginRegExp.test(log);
			if(log == "" || !res) {
				login.classList.add("error");
			} else {
				login.classList.remove("error");
			}
		}
		if(target.id == "email") {

			console.log(target.value);
		}
		if(target.id == "psw") {
			console.log(target.value);
		}

	}

	function checkInputFields(e) {
		if(login.value == "") {
			login.classList.add("error");
			e.preventDefault()
		}
		if (email.value == "") {
			email.classList.add("error");
			e.preventDefault()
		}
		if (psw.value == "") {
			psw.classList.add("error");
			e.preventDefault()
		}
	return true;
	}

}
	



  /*document.body.onclick = function(e) {
    var target = e.target;
    while (target != this) {
      if (target.tagName.toLowerCase() == "h2") {
        console.log(target.tagName)
      }
      target = target.parentNode;
    }*/
    /*if (e.target.tagName == "H2") {
      console.log(e.target.textContent)
    }*/
  //}*/