
window.onload = function() {
	var login = document.getElementById("login");
	var email = document.getElementById("email");
	var psw = document.getElementById("psw");
	
	login.addEventListener("blur", handler);
	email.addEventListener("blur", handler);
	psw.addEventListener("blur", handler);

	function handler() {
		console.log(this.value);
		console.log(this.type)
	}
	
}