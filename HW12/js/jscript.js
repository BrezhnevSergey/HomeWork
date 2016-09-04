// Code goes here



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
		if(target.id == "login") {
			checkLogin();
		}

		if(target.id == "email") {
      checkEmail();
		}

		if(target.id == "psw") {
      checkPsw();
		}

	}
	
	function checkLogin() {
	  var loginRegExp = /^\w{3,20}$/;
	  var login = loginOb.value;
	  if ( login == "" || !(loginRegExp.test(login)) ) {
	    loginOb.classList.add("error");
	    return false;
	  } else {
	    loginOb.classList.remove("error");
	    return true;
	  }
	}
	
	function checkEmail() {
	  var emailRegExp = /^[-\w.]+@([A-z0-9]+\.)+[A-z]{2,4}$/;
	  var email = emailOb.value;
			if( email == "" || !(emailRegExp.test(email)) ) {
				emailOb.classList.add("error");
				return false;
			} else {
				emailOb.classList.remove("error");
				return true;
			}
	}
	
	function checkPsw() {
	  var pswRegExp = /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	  var psw = pswOb.value;
			if ( psw == "" || !(pswRegExp.test(psw)) ) {
				pswOb.classList.add("error");
				return false;
			} else {
				pswOb.classList.remove("error");
				return true;
			}
	}

	function checkInputFields(e) {
	  var resChkLgn = checkLogin();
	  var resChkEml = checkEmail();
	  var resChkPsw = checkPsw();
	  if ( !resChkLgn || !resChkEml || !resChkPsw ) {
		   e.preventDefault();
	     return false;
    } else {
      return true;
    }
	}

}