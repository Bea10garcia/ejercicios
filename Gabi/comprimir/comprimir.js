// Esta funcion suma los valores de cada digito del string de entrada. Como el resultado se 
// devuelve como tipo numero se vuelve a transformar a string a la salida
function Sumar(valor){
    var suma;
    suma=0;
    for(i=0;i<valor.length;i++){
        suma += parseInt(valor[i]);
    }
return suma.toString();
}

// Esta funcion va a comprimir los valores gracias a la funcion anterior Sumar(). Como se tiene 
// que sumar hasta que el resultado sea de un solo digito se emplea un condicional y la misma funcion
// en recursividad. Como resultado vamos a tener un valor de salida de un solo caracter
function Comp(valor){
    var valor;
    var suma2;
    suma2 = 0;
    if (valor.length>1){
        suma2 = Sumar(valor);
        if(suma2.length>1){
            suma2=Comp(suma2);
        }
        return suma2;
    } else {
        suma2 = valor;
        return suma2;
    }
}

// Esta es la funcion principal. El primer paso es convertir en matriz el input de entrada. Despues
// empleando un bucle diferencia si cada valor de la matriz es un numero o letra. En caso de letra 
// lo introduce en la matriz de salida tal cual esta. En caso de numero lo comprime con la funcion 
// Comp() y lo introduce en la matriz de salida como un unico numero. 
function Comprimir(entrada){
    var entrada;
    var matriz;
    var res;
    var salida;
    matriz = entrada.value.split(" ");
    res=[];
    for ( j = 0 ; j < matriz.length ; j++ ){
        if (isNaN(matriz[j])){
            res.push(matriz[j]);
        } else {
            res.push(Comp(matriz[j]));
            }
    };
    salida = res.join(" ");
document.getElementById("salida").innerHTML ="Tu valores comprimidos son =====> " + salida;
return;
}