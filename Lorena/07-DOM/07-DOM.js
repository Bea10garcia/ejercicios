"use strict"

function ocultarMostrar(seccion,referenciaBoton){
	seccion.style.display = (seccion.style.display == 'none') ? 'block' : 'none';
		
			if(seccion.style.display == 'none'){
				//document.getElementById("botonOcultarMostrar").innerHTML = "Mostrar contenidos";
				referenciaBoton.innerHTML = "Mostrar contenido";
			}else{
				//document.getElementById("botonOcultarMostrar").innerHTML = "Ocultar contenidos";
				referenciaBoton.innerHTML = "Ocultar contenidos";
			}
}
	