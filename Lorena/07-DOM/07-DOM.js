"use strict"

function ocultarMostrar(seccion,referenciaBoton){
	seccion.style.display = (seccion.style.display == 'none') ? 'block' : 'none';
		/*
			if(seccion.style.display == 'none'){
				referenciaBoton.innerHTML = "Mostrar contenido";
				
			}else{
				referenciaBoton.innerHTML = "Ocultar contenidos";
				
			}
		*/
	//	Porpuesto por el profe
	referenciaBoton.innerHTML = (seccion.style.display == 'none' ? "Mostrar contenido" :"Ocultar contenidos" )
}
	
