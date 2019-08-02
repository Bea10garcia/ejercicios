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
            document.getElementById("salida").innerHTML = "La frase es un políndromo";
            console.log(i);
            console.log(frase.charAt(i));
            console.log(frase.charAt(long-i));
        } else {
            return document.getElementById("salida").innerHTML = "La frase no es un políndromo";
        }
    } return 
}