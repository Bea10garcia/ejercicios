# ejercicios
Ejercicios del curso de desarrollo web Madrid Junio 2019

Ejercicio 1 --> **8,0**

- La sentencia "if" de la línea 11 - 17, se puede reducir a una sóla línea. **Busca info sobre el operador ternario y pruébalo** (-1)
- Condición línea 8 -> Los números negativos (<0) pueden ser enteros y pares o impares (-1).

Ejercicio 2 --> **7,5**

- La cláusula de salida (lin. 9-12) es mejor hacerla con un if (-0,5). 
-- if (frase == "") {
--		alert(...)
--		return
--}
- No cambias las letras con tilde por el mismo caracter sin tilde. Así, "dábale" no detecta que sea el palíndromo de "el abad". (-1)
- La sentencia "if" de la línea 29-33, se puede reducir a una sóla línea. **Busca info sobre el operador ternario y pruébalo** (-1)

Ejercicio 7 --> **9,0**

- ¿Por qué no has usado el comparador ternario en la condición de la línea 6? (-1)
- Prueba los elementos "collapse" de Bootstrap (https://getbootstrap.com/docs/4.0/components/collapse/)

Ejercicio 11 --> **8,75**

- No compruebas que el dato introducido sea un número. Así, por ejemplo die que "r es menor que 6" (-1). Recuerda que al suar "form", los datos se comprueban, pero no has incluido nada para arrojar un error si son incorrectos.
- El else if de la lin. 9 se puede cambiar por un else, ya que si n1 NO es mayor que n2 y n1 NO es menor que n2, entonces n1 SOLO puede ser igual a n2 y, por tanto, sobra la comprobación (-0,25)