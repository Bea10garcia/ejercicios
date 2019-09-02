// función que comprueba que en el texto introducido hay una fecha válida
function fecha(input){
    var regexFecha;
    // Se considera una RegEx que exija valores de días entre 1-31 y los meses del 1-12. No se exije que el
    // año haya pasado porque dependerá de la finalidad de la aplicación
    regexFecha = /^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/;
    input = input.split(" ");
    // inicializo variable tienefecha. Si en la comprobación se demuestra que tiene será true
    tienefecha = false;
    input.forEach(function(palabra)  {
        if (palabra.match(regexFecha))  {
            tienefecha = true;
        }
    });
    document.getElementById("solucionfecha").innerHTML = tienefecha ? "La frase contiene una fecha" : "La frase no contiene un fecha";
    return;
}

// Función que comprueba que el correo electrónico es válido
function correo(input){
    var regexEmail;
    var input;
    regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/igm;
    document.getElementById("solucionemail").innerHTML = input.match(regexEmail) ? "El correo electrónico es válido" : "El correo electrónico no es válido";
}

// Funcion para sustituir con RegEx. 
function escapeHTML(text) {
    var replacements = [[/&/g , "&amp;"], [/\"/g , "&quot;"],
                        [/</g , "&lt;"], [/>/g, "&gt;"]];
    replacements.forEach(function(replace)  {
        text = text.replace(replace[0],replace[1]);
    });
    document.getElementById("solucionsust").innerHTML = text;
    return text;
}


// Función para invertir nombre y apellido
function invertir(entrada){
    var nombre;
    var apellidos;
    apellidos = "";
    // Cada nombre o apellido empieza por mayuscula, por lo que es el criterio para separar el string
    entrada = entrada.split(/(?=[A-Z])/);
    nombre = entrada[0];
    for (i = 1; i < entrada.length; i++){
        apellidos += entrada[i];
    }
    document.getElementById("solucionnombre").innerHTML = apellidos+", "+nombre;
}


// Función para eliminar script
function peligro(cadena){
    if (cadena.match(/<html(.|\n)*?<\/html>/)){
        if (cadena.match(/<script(.|\n)*?<\/script>/)){
            cadena = cadena.replace(/<script(.|\n)*?<\/script>/g , "");
            document.getElementById("solucionpeligro").innerHTML = cadena;
        }else{
            document.getElementById("solucionpeligro").innerHTML = "La cadena de HTML no contiene ningún script";
        }
    } else{
        document.getElementById("solucionpeligro").innerHTML = "La cadena facilitada no es un HTML";
    }
    return;
}