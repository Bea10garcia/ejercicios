"use strict"
/*Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/

function palindromo(frase){

//var frase = prompt("Escribe una frase").toLowerCase();

while(frase==""){
	alert("Escribe una frase");
	break;	
}

//Eliminamos los espacios de la frase. Letra minúscula
frase = frase.toLowerCase().replace(/ /g, "");

//Invertimos la frase.
 var fraseInvertida = frase.split("").reverse().toString();


//Le quito las comas
for (var i=0; i < ((fraseInvertida.length)-1); i++) {
	fraseInvertida=fraseInvertida.replace(",","");
};
//console.log(fraseInvertida);
//console.log(frase);

//Compruebo si es un palíndromo
/*
if(frase==fraseInvertida){
	document.getElementById("resultado").innerHTML="La frase <em>"+fraseUsuario.value+"</em> es un palíndromo";
}else if(frase!=fraseInvertida){
	document.getElementById("resultado").innerHTML="La frase <em>"+fraseUsuario.value+"</em> no es un palíndromo";
}
*/
//	Propuesto por el profe 
document.getElementById("resultado").innerHTML="La frase <em>"+fraseUsuario.value+"</em> " +
	(frase==fraseInvertida ? 'es ' : 'no es ') + "un palíndromo";

}







/*INTENTO FALLIDO
//Meto la frase en un array
var fraseOriginal = [];

for(var i=0; i<frase.length; i++){
	var letra = frase.charAt(i); //Sacar caracter que se encuentra en la posición i
	fraseOriginal.push(letra);
}
console.log(fraseOriginal);

//Array invertido 
var fraseInvertida = frase.split("").reverse();
console.log(fraseInvertida);

if(fraseOriginal!=fraseInvertida){
	alert("La frase no es un palíndromo");
}else{
	alert("La frase no es un palíndromo");
}*/


