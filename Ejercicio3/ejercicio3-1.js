function CalculaLetradni(dni){
	var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
	var resto;
	var letra;
	resto = dni % 23;
	letra=letras.substr(resto,1);
	console.log("dni=" +dni);
	console.log("letra= "+letra);
	document.getElementById("nrodni").innerHTML = dni;
	document.getElementById("letra").innerHTML = letra;
	return;
}