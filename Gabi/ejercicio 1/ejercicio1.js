function ParImpar(nro){
    /*
    var nro;
    var resto;
    nro = nro.value;
    // El resto de dividir entre dos determina si es par. En caso de ser 0 es par, de ser 1 es impar
    resto = nro % 2;
    if (resto == 0){
        document.getElementById("salida").innerHTML="El número es par"
    }else{
        document.getElementById("salida").innerHTML="El número es impar"
    }
    */
    // Propuesto por CPL
        document.getElementById("salida").innerHTML= ' El número ' + nro + ((nro % 2 == 0) ?  ' es par ' : ' es impar ');
}