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
	var errores = document.getElementById("errores").innerText;	
	console.log(vidas);
	palabraFormada = document.getElementById("adivinando").innerText;
	posNuevaLetra= palabraFormada.length;
	if (palabraAdivinar[posNuevaLetra] == letra) {
		document.getElementById("adivinando").innerHTML += letra;
	} else {
		alert("LETRA NO CORRECTA");
		vidas--;
		document.getElementById("vidas").innerHTML= vidas;
		errores++;
		console.log(errores);
		document.getElementById("errores").innerHTML= errores;
		document.getElementById("imgs").src= "../img/ahorcado_"+errores+".png";
		sigovivo(vidas);
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

