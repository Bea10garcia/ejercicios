# ejercicios
Ejercicios del curso de desarrollo web Madrid Junio 2019

Ejercicio 1 --> **8,5**

- Bien por los comentarios para explicar la función. Aunque sea evidente, es bueno que te acostumbres a incluir comentarios desde el principio.
- En la línea 14 (.html) se puede pasar como parámentro "numero.value". Al ocupar menos espacio de memoria un número (propiedad ".value") que un objeto ("numero") se mejora el uso de la memoria. En este caso concreto es una diferencia irrelevante, pero es necesario acostumbrarse a tener presente siempre técnicas que optimicen el uso de memoria y demás recursos del terminal. (-0,25)
- Además, en la función únicamente se utiliza la propiedad "value" del objeto input text "nro"
- La sentencia "if" de la función ParImpar(), se puede reducir a una sóla línea. **Busca info sobre el operador ternario y pruébalo** (-1,25)

Ejercicio 2 --> **6,0**

- En la línea 14 (.html) se puede pasar como parámentro "numero.value". Al ocupar menos espacio de memoria un número (propiedad ".value") que un objeto ("numero") se mejora el uso de la memoria. En este caso concreto es una diferencia irrelevante, 
pero es necesario acostumbrarse a tener presente siempre técnicas que optimicen el uso de memoria y demás recursos del terminal. (-0,25)
- Además, en la función únicamente se utiliza la propiedad "value" del objeto input text "nro".
- En la misma línea 14, puesto que se va a pasar una frase, hubiera sido más adecuado un "textarea" o una ventana más larga (-0,5)
- Utilizar variables locales (aunque en este caso, al declararla mediante "var", se considera global) con el mimsmo nombre de los parámetros es una mala práctica porque puede inducir a errores. (-1)
- Por otra parte, si no es necesario conservar el valor original del parámetro no es necesario crear ninguna variable. (-0,25)
- El uso de una exresión regular permite eliminar la función "quitarTildes", aumentando la flexibilidad y posibilidades de incluir más caracteres a convertir y la legibilidad del código (-1)
- La comprobación de las líneas 29 a 36 del código original, se puede reducir: (-1)
	- No es necesario cambiar el innerHTML en cada iteracción.
	- La salida de comprobación a consola no debe aparecer en el código de producción. 
- Fijarse en el uso de la forma ternaria del condicional para reducir el código.

Ejercicio 4 --> **6,25**

- No se quita el recuadro rojo después de corregir el error. (-0,5)
- Para un campo obligatorio, se puede utilizar la cláusula "required" en el elemento HTML. (-0,25). Así,no sería necesaria la función para vaidar el nombre.
- En las llamadas a las funciones en el .html se puede pasar como parámentrola propiedad ".value" del objeto. Al ocupar menos espacio de memoria un número (propiedad ".value") que un objeto ("input text") se mejora el uso de la memoria. 
	- En este caso concreto es una diferencia irrelevante, pero es necesario acostumbrarse a tener presente siempre técnicas que optimicen el uso de memoria y demás recursos del terminal. (-0,25)
	- Además, en la función únicamente se utiliza la propiedad "value" del objeto input text "nro"
- Bien por incluir un contador con referencia visual para el usuario. (+.25)
- Sobra la función Enviar (-1,5)
- El resto de funciones se puede mejorar tanto en funcionalidad, como en legibilidad (-1,5)

Ejercicio 5 --> **9,75**

- Falta poner en blanco el cuadro del teclado al mover el ratón (-0,25).

Ejercicio 6 --> **8,0**
- En las llamadas a las funciones en el .html se puede pasar como parámentrola propiedad ".value" del objeto. Al ocupar menos espacio de memoria un número (propiedad ".value") que un objeto ("input text") se mejora el uso de la memoria. 
	- En este caso concreto es una diferencia irrelevante, pero es necesario acostumbrarse a tener presente siempre técnicas que optimicen el uso de memoria y demás recursos del terminal. (-0,25)
	- Además, en la función únicamente se utiliza la propiedad "value" del objeto.
- Siempre que se pueda, se deben utilizar las funciones del leguaje para obtener lo que se desee ya que estas están optimizadas frente al código que podamos escribir.
	- En la función escogerPalabra, para obtener una cadena como repetición de otra, se puede utilizar la función ".repeat" aplicada a la cadena. (buscar "js repeat string" o "js repeat char" (-0,5).
- Los botones se crean de nuevo cada vez que se ejecuta el juego. Aunque en este caso no supone un gran gasto, si es una mala práctica ya que desperdicia recursos. (-0,5)
- Bien por la llamada a "onload" (+.25)
- Los parámetros no hace falta volverlos a definir como variables dentro de la función (-0,5)
- La función "acierto" se puede optimizar disminuyendo el nro. de variables y las líneas de código (-0,5).
