//Palabras posibles
var palabras;
palabras =[ ["vacaciones", "Periodo de no hacer nada"], ["andar", "Se recomienda hacerlo todos los días"], ["correr", "Es de cobardes"]];
// Palabra escogida
var escogida;
escogida = [];
// Contador de intentos
var cont;

// Añadir palabra
function unamas(palabra,pista){
    var palabra = palabra.value;
    var pista = pista.value;
    palabras.push([palabra,pista]);
}

// Escoger palabra
function escogerPalabra(){
    escogida = palabras [Math.floor((Math.random() * (palabras.length)))];
    for ( i = 0; i < escogida[0].length; i++){
        document.getElementById("palabra").innerHTML += "_"
    }
    escogida[0] = escogida[0].toUpperCase();
}

// Crear botones abecedario
function abc(a, z){
    document.getElementById("abcdario").innerHTML = "";
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letra;
    letra = "";
    for ( ; i<=j; i++) {
        letra = String.fromCharCode(i).toUpperCase();
        document.getElementById("abcdario").innerHTML += "<button value='"+letra+"' onclick='probar(\""+letra+"\")' class='letra' id='"+letra+"'>" + letra + "</button>";
        if (i==110) {
            document.getElementById("abcdario").innerHTML += "<button value=Ñ onclick='probarÑ' class='letra' id='Ñ'> Ñ </button>";
        }
    }
}

// Desactivar todos los botones
function desactivar(){
    var a = "a";
    var z = "z";
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letra;
    letra = ""; 
    for ( ; i <=j ; i++){
        letra = String.fromCharCode(i).toUpperCase();
        document.getElementById(letra).disabled = true;
    }
    document.getElementById("Ñ").disabled = true;
}

// Añadir letra acertada a pantalla
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

// Dar pista
function pista(){
    document.getElementById("hueco-pista").innerHTML= escogida[1];
}

// Fallo
function fallo(letra){
    var letra;
    cont = cont - 1;
    document.getElementById('image'+cont).style.opacity=1;
    if (cont == 0){
        document.getElementById("msg-final").innerHTML = "Fin del juego";
        document.getElementById("msg-final").style.transform = "none";
        desactivar();
    }
    document.getElementById(letra).style.backgroundColor = "red";
    document.getElementById(letra).disabled = true;
    document.getElementById("intentos").innerHTML = cont;
}

// Acierto. Array con las posiciones donde se encuentra la letra. Aparición en pantalla de las letras
function acierto(letra){
    var letra;
    var posicion;
    var ultpos;
    var str;
    posicion = [];
    ultpos = 0;
    str = palabra.innerHTML;
    for ( ; ultpos != -1; ){
        ultpos = escogida[0].indexOf(letra,ultpos);
        if (ultpos != -1) {
            posicion.push(ultpos);
            ultpos++;
        }
    }
    for ( i = 0; i < posicion.length ; i++){
        str = setCharAt(str,posicion[i],letra);
    }
    document.getElementById("palabra").innerHTML = str;
    if (str.indexOf("_") == -1){
        document.getElementById("msg-final").style.color = "green";
        document.getElementById("msg-final").innerHTML = "¡Enhorabuena!";
        document.getElementById("msg-final").style.transform = "none";
        desactivar();
    }
}

// Proceso tras elegir letra
function probar(letra){
    var letra;
    if (escogida[0].indexOf(letra) != -1){
        acierto(letra);
        document.getElementById(letra).style.backgroundColor = "green";
        document.getElementById(letra).disabled = true;
    } else {
        fallo(letra);
    }
}

// Restablecer
function inicio(){
    abc("a", "z");
    document.getElementById("palabra").innerHTML = "";
    escogerPalabra();
    cont= 6;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("hueco-pista").innerHTML= "";
    document.getElementById("msg-final").innerHTML = "";
    document.getElementById('image5').style.opacity=0;
    document.getElementById('image4').style.opacity=0;
    document.getElementById('image3').style.opacity=0;
    document.getElementById('image2').style.opacity=0;
    document.getElementById('image1').style.opacity=0;
    document.getElementById('image0').style.opacity=0;
}


// Cargar partida
window.onload = inicio();