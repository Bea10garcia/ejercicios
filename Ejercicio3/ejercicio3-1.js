function CalculaLetradni(dni){
	var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
	var resto;
	var letra;
	// dni es un objeto del DOM (inputElement), por lo que para acceder al 
	// valor, utilizamos la propiedad value

	//	Si el dni no es un nro, es que tiene letras y no puede procesarse
	if(isNaN(dni.value)){
		alert("El nro. de dni debe contener sólo cifras.");
		
	} else if(dni.value.length != 8){ 
	 	alert("El nro. debe tener 8 cifras.");
	}
	else {
		resto = dni.value % 23;
		letra=letras.substr(resto,1);
		console.log("dni=" +dni.value);
		console.log("letra= "+letra);
		document.getElementById("nrodni").innerHTML = dni.value;
		document.getElementById("letra").innerHTML = letra;
	}
	return;
}