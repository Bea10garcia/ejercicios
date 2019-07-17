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
		//document.getElementById("letra").innerHTML = letra;
		}
	return letra;
}

function verificardni(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  dnicorrecto = expresion_regular_dni.test(dni.value); 
  if(dnicorrecto == true){
    //  Si el dni tiene el formato correcto, extraemos la parte numérica
    numero = dni.value.substr(0,dni.value.length-1);
    //  Extraemos la letra del dni introducido
    letr = dni.value.substr(dni.value.length-1,1);
    //  Calculamos la letra
    numero = numero % 23;
    //letra='TRWAGMYFPDXBNJZSQVHLCKE';
    letra='TRWAGMYFPDXBNJZSQVHLCKE'.substr(numero, 1);
    //  Verificamos si la letra introducida (en mayúsculas) es igual a la calculada
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

function dimeletra(nro) {
  var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  var resto;
  var letra;

  resto=nro % 23;
  letra=letras.substr(resto,1);
  return letra; 
}

function comprobar(dni) {
  var nro;
  var letra;
  nro= parseInt(dni.value);
  console.log(nro);
  letra = dimeletra(nro);
  if(dni.value==nro+letra) {
    alert("dni Correcto");
  } else {
    alert("dni incorrecto.");
  }
}