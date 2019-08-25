"use strict"

function ocultarMostrar(seccion){
	seccion.style.display = (seccion.style.display == 'none') ? 'block' : 'none';
		
			if(seccion.style.display == 'none'){
				document.getElementById("botonOcultarMostrar").innerHTML = "Mostrar contenidos";
			}else if(seccion.style.display == 'block'){
				document.getElementById("botonOcultarMostrar").innerHTML = "Ocultar contenidos";
			}
}
	