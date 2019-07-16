function CalculaLetradni(dni){
	var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
	var resto;
	var letra;
	if(isNaN(dni.value)){
		alert("el numero de dni debe contener solo cifras");
		}
	 else if(dni.value.length != 8){
		alert("añada 0 al inicio hasta tener 8 números");
		}
	else{
		resto=dni.value % 23;
		letra=letras.substr(resto,1);
		document.getElementById("nrodni").innerHTML = dni.value;
		document.getElementById("letra").innerHTML = letra;
		}
	return;
}

function verificardni(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKE';
     letra=letra.substring(numero, 1);

    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
     }

    else{
       alert('Dni correcto');
     }
  }

  else{
     alert('Dni erroneo, formato no válido');
   }
}
