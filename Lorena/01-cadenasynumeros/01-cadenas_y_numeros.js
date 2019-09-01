/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función.*/

function parImpar(numero){
	numero = parseInt(numero);
	//console.log(typeof(numero));

/*
	if(numero<0){
		alert("Ingresa un número entero");
		
	}else if(numero%2 == 0){		
		document.getElementById("resultado").innerHTML ="El número "+numero+" es par";
		
	}else{
		document.getElementById("resultado").innerHTML ="El número "+numero+" es impar";
		
	}
*/
	// Propuesto por CPL
    document.getElementById("resultado").innerHTML= ' El número ' + numero + ((numero % 2 == 0) ?  ' es par ' : ' es impar ');
}


