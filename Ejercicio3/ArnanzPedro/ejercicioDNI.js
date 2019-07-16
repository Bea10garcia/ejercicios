function validarnumero(){
	var cifra = document.getElementById("cifra");
	cifra= cifra.value;
	if(isNaN(cifra)){
		alert ("Introduce un numero correcto");
	} else{ comprobarlongitud(cifra);}

}

function comprobarlongitud(x){
	console.log(x);
	var cifrasuma = x.toString();
	console.log(cifrasuma);
	var longitud = cifrasuma.length;
	console.log(longitud);
	if (longitud!=1) {
		comprimir(x);
	} else { 
		document.getElementById("comprimido").innerHTML= x;
	}
}

function comprimir(x){
	x=x.toString();
	var longitud = x.length;
	
	var suma = 0;
	for (var i = 0; i < longitud; i++) {
		suma += parseInt(x[i]);
	}
	comprobarlongitud(suma);
}


function estabien(){
	var x = document.getElementById("dni");
	dni= x.value;
	if (dni.length != 8) {
		alert ("Introduce un DNI de 8 dígitos");
	} else if(isNaN(dni)) {
		alert ("No introducir carácteres no numéricos");
	} else {
		calculardni();
	}
}


function calculardni() {
	var x = document.getElementById("dni");
	dni0= x.value;
	dni= x.value;
	if(dni[0] == 0){
		dni= parseInt(dni.substring(1,dni.length));
	}
	var letra = sacarletra(dni);

	console.log(dni);
	console.log(letra);
	document.getElementById("nrdni").innerHTML= "La letra del dni "+ dni0 + " es " + letra;
}

function validardni() {
	var x = document.getElementById("dniletra");
	dni= x.value;
	ncaract= dni.length;
	var letraintrod =  dni.substring(ncaract-1);
	var dnisinletra = dni.substring(0,ncaract-1);
	if(dnisinletra[0] == 0){
		dni= parseInt(dni.substring(1,dnisinletra.length));
	}
	var letra = sacarletra(dni)

	if (letra==letraintrod) {
		document.getElementById("true/false").innerHTML= "VERDADERO";
	} else {
		alert ("Este dni es FALSO, introduce el verdadero");
		document.getElementById('dniletra').value = "";
	}
	console.log(dni);
	console.log(letraintrod);
}

function sacarletra(dni){
	var codigo = "TRWAGMYFPDXBNJZSQVHLCKE";
	var resto = dni%23;
	var result = dni/23;
	var letra = codigo[resto];
	return letra;

}