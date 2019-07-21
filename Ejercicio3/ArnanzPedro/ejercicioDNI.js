function ocultar() {
	document.getElementById("aAdivinar").style.display="none";
	document.getElementById("botonOcultar").style.display="none";
	document.getElementById("bienvenida").innerHTML = "MUCHA SUERTE!!";
	console.log("HOLA")
}


function jugarahorcado(letra) {
	var palabraAdivinar = document.getElementById("aAdivinar").value;
	console.log(palabraAdivinar);
	letra= letra.value;
	var vidas = document.getElementById("vidas").innerText;
	console.log(vidas);

	if (typeof document.getElementById("adivinando") === 'undefined') {
		if (palabraAdivinar[0] == letra) {
			document.getElementById("adivinando").innerHTML= letra;
		} else {
			alert("LETRA NO CORRECTA");
			vidas--;
			document.getElementById("vidas").innerHTML= vidas;
			sigovivo(vidas);
		}
	} else {
		palabraFormada = document.getElementById("adivinando").innerText;
		posNuevaLetra= palabraFormada.length;
		if (palabraAdivinar[posNuevaLetra] == letra) {
			document.getElementById("adivinando").innerHTML += letra;
		} else {
			alert("LETRA NO CORRECTA");
			vidas--;
			document.getElementById("vidas").innerHTML= vidas;
			sigovivo(vidas);
		}	
	}
	if (palabraAdivinar == document.getElementById("adivinando").value){
		alert("GANASTE");
	}
	document.getElementById("myForm").reset()
}

function sigovivo(vidas){
	if (vidas <= 0){
		alert("SE ACABO EL JUEGO")
		document.getElementById("adivinando").innerHTML=""; 
		document.getElementById("aAdivinar").style.display="block";
		document.getElementById("botonOcultar").style.display="block";
		document.getElementById("vidas").innerHTML= 7;
		return;
	}

}

function validarnumero(){
	var cifra = document.getElementById("cifra");
	cifra= cifra.value;
	if(isNaN(cifra)){
		alert ("Introduce un numero correcto");
	} else{ comprobarlongitud(cifra);}
	return;
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
	return;
}

function comprimir(x){
	x=x.toString();
	var longitud = x.length;
	
	var suma = 0;
	for (var i = 0; i < longitud; i++) {
		suma += parseInt(x[i]);
	}
	comprobarlongitud(suma);
	return;
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
	if (ncaract!=9) {alert("formato no valido");return}
	var letraintrod =  dni.substring(ncaract-1);
	var dnisinletra = dni.substring(0,ncaract-1);
	if (isNaN(dnisinletra)){alert("formato no valido");return}
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