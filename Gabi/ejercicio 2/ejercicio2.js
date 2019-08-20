//  CODIGO ORIGINAL
/*
// Suponemos que se introduce la frase solo en castellano, por lo que se crea función para quitar las tíldes y diéresis que hay en este idioma
function quitartildes(frase){
    var frase;  
        frase = frase.replace("á" , "a");
        frase = frase.replace("é" , "e");
        frase = frase.replace("í" , "i");
        frase = frase.replace("ó" , "o");
        frase = frase.replace("ú" , "u");
        frase = frase.replace("ü" , "u");


return frase;
}

function Palindromo(frase){
    var frase;
    //Se eliminan los espacios en el input
    frase = frase.value.replace(/ /g, "");
    // Se sustituyen posibles mayus por minus
    frase = frase.toLowerCase();
    // Se quitan posibles tildes al string
    frase = quitartildes(frase);
    // Al largo total del string se le resta 1 para evitar que el último valor a considerar sea distinto a la ultima letra
    long = frase.length-1;
    // Para ir comparando caracter a caracter introduce un bucle. En el momento que se cumpla que "i=long-i" significa que ha llegado al centro
    for (var i = 0; i < (long - i); i++){
        if (frase.charAt(i)==frase.charAt(long-i)){
            document.getElementById("salida").innerHTML = "La frase es un palíndromo"; // <-- Esto no se debe hacer en cada paso del bucle
            console.log(i);
            console.log(frase.charAt(i));
            console.log(frase.charAt(long-i));
        } else {
            return document.getElementById("salida").innerHTML = "La frase no es un palíndromo";
        }
    } return 
}
*/

//  CODIGO PROPUESTO

function Palindromo(frase){
    //  El parámetro ya es un texto pues se paso como valor la propiedad value del objeto
    //  No hace falta crear una variable, ya que el parámetro es locar a la función
    var sinTildes = {
        "á":"a",
        "é":"e",
        "í":"i",
        "ó":"o",
        "ú":"u",
        "ü":"u",
        " ":"",
    };
    //  Incializo la variable que indica si es palíndromo. Si falla la comprobación posterior, será false
    espalindromo = true;
    //  Pasámos a minúsculas
    frase = frase.toLowerCase();
    //  Convertmos todos los caracteres acentuados.
    //  Puesto que las especificaciones del problema no indican nada respecto al idioma de entrada, asumimos que es
    //  español únicamente.
    frase = frase.replace(/[áéíóúü ]/g, function(s) {
            return sinTildes[s];
        });
    // Al largo total del string se le resta 1 para evitar que el último valor a considerar sea distinto a la ultima letra
    // Para ir comparando caracter a caracter introduce un bucle. En el momento que se cumpla que "i=long-i" significa que ha llegado al centro
    for (var i = 0; i < (frase.length - 1 - i); i++){
        if (frase.charAt(i) != frase.charAt(frase.length - 1 - i)) {
            espalindromo = false;
            break;      // si falla un caracter, ya no es palindromo y no hace falta seguir comprobando
        }
    }
    //  NOTA: Fijarse en el uso del condicional ternario para utilziar una sóla línea de código
    document.getElementById("salida").innerHTML = "La frase " + (espalindromo ? "es " : "no es ") + "un palíndromo."

    //  NOTA. Si quiesíeramos hacer referencia a la frase original, SI deberíamos haber creado una variable local y haber
    //  mantenido la frase original bien en esa nueva variable, o bien en el parámetro
}