//Palabras posibles
var palabras;
palabras =[["vacaciones", "Periodo de no hacer nada"],
           ["andar", "Se recomienda hacerlo todos los días"], 
           ["correr", "Es de cobardes"],
          ];
// Palabra escogida
var escogida= []; // En JS se puede asignar un valor al declarar la variable

// Contador de intentos
var cont;

// palabraVista es la palabra tal como se va viendo en panatlla tras los sucesivos intentos
var palabraVista = ""


// Añadir palabra
function unamas(palabra,pista){
    // No hacen falta variables puesto que se ha pasado directamente el valo introducido como parámetro
    // en lugar del objeto
    palabras.push([palabra,pista]);
}

// Escoger palabra
function escogerPalabra(){
    escogida = palabras [Math.floor((Math.random() * (palabras.length)))];
    
    //  Siempre que se pueda, se deben utilizar las funciones del leguaje para obtener lo que se desee ya que 
    //  esta están optimizadas frente al código que podamos escribir
    palabraVista = "_".repeat(escogida[0].length);

    document.getElementById("palabra").innerHTML = "_".repeat(escogida[0].length);

    

    
    //for ( i = 0; i < escogida[0].length; i++){
    //    document.getElementById("palabra").innerHTML += "_"
    //}
    
    escogida[0] = escogida[0].toUpperCase();
}

// Crear botones abecedario
function abc(a, z){
    //document.getElementById("abcdario").innerHTML = "";
    // Si el elemento "abcdario" tiene contenido, los botones ya fueron creados y no hay que volver a hacerlo
    let btns = document.getElementById("abcdario").children // devuelve los nodos del elem. "abcdario"
    if (! btns.length == 0) {           // Si hay nodos, es que los botones ya están creados
        // Aseguramos que el fondo es el marcado en el archivo .css y que queda activado
        for(let i=0; i < btns.length; i++) {
            btns[i].style = "";
            btns[i].disabled = false;
        }
        return;
    }
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
// Igual que al crear los botones, aquí ya están creados, por lo que basta recorrer los nodos del elem. HTML "abcdario"
function desactivar(){
    /*var a = "a";
    var z = "z";
    var i = a.charCodeAt(0), j = z.charCodeAt(0);
    var letra;
    letra = ""; 
    for ( ; i <=j ; i++){
        letra = String.fromCharCode(i).toUpperCase();
        document.getElementById(letra).disabled = true;
    }
    document.getElementById("Ñ").disabled = true;   
    */
    for(let i=0; i < document.getElementById("abcdario").children.length; i++) {
            document.getElementById("abcdario").children[i].disabled = true;
    }
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
    //var letra;        Los parámetros no hace falta volverlos a definir como variables

    cont = cont - 1;  // tambien se puede poner como cont-- o como cont -=1
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
function acierto(letra, ultpos){
    /*  CODIGO ORIGINAL     */
    //var letra;    Los parámetros no hace falta volverlos a definir como variables

    //var posicion;     No hace falta guardar las posiciones, la sustitución de los guiones se puede hacer "sobre la marcha"
    //var ultpos;
    //var str;
    //posicion = [];
    //ultpos = 0;
    //str = document.getElementById("palabra").innerHTML;

    /*  CODIGO PROPUESTO    */
    //  (Mejor utilizar un bucle while para cambiar la letra acertada si aparece más veces)
    //  Este bucle se ejecuta al menos una vez ya que si entra en esta función es porque se ha acertado una letra y
    //  en la llamada se ha pasado una posición
    while (ultpos != -1){
        //  Pongo la letra acertada en su sitio ...
        palabraVista = setCharAt(palabraVista, ultpos, letra);
        //  Incremento la posición a partir de la que se busca la letra
        ultpos++;
        //  ... y busco más ocurrencias de la misma letra.
        ultpos = escogida[0].indexOf(letra,ultpos);
    }
    //  Marco los botones como acertados
    document.getElementById(letra).style.backgroundColor = "green";     
    document.getElementById(letra).disabled = true;

    /*  CODIGO ORIGINAL     */
    /*
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
    */
    if (palabraVista.indexOf("_") == -1){
        document.getElementById("msg-final").style.color = "green";
        document.getElementById("msg-final").innerHTML = "¡Enhorabuena!";
        document.getElementById("msg-final").style.transform = "none";
        desactivar();
    }
}

// Proceso tras elegir letra
function probar(letra){
    //var letra;        Los parámetros no hace falta volverlos a definir como variables

    //  Utilizaremos la variable pos para enviar la primera posición encontrada
    pos = escogida[0].indexOf(letra)

    if (pos != -1){
        acierto(letra, pos);
        // Las dos siguientes líneas deberían estar en la función "acierto" porque forman parte del proceso
        //document.getElementById(letra).style.backgroundColor = "green";     
        //document.getElementById(letra).disabled = true;
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
    /*
    document.getElementById('image5').style.opacity=0;
    document.getElementById('image4').style.opacity=0;
    document.getElementById('image3').style.opacity=0;
    document.getElementById('image2').style.opacity=0;
    document.getElementById('image1').style.opacity=0;
    document.getElementById('image0').style.opacity=0;
    */

    //Hemos añadido el id en el div de las imágenes para poder hacer esto
    for (let i=0; i=5; i++){
         document.getElementById('imagenes').children[i].style.opacity=0;
    }
}


// Cargar partida
window.onload = inicio();