# ejercicios
Ejercicios del curso de desarrollo web Madrid Junio 2019

Ejercicio 1 --> **8,0**

- No pasas el parámentro a la función en la línea 17. Aunque se pase de forma implícita, es una buena práctica para mejorar la legibilidad del código, pasar los parámentros de forma explícita. (-0,25)
- La línea 19 no sirve para nada. Debería ser eliminada. Distrae a la hora de evaluar el codigo. (-0,5)
- Bien por los comentarios para explicar la función. Aunque sea evidente, es bueno que te acostumbres a incluir comentarios desde el principio.
- En la línea 13 se puede pasar como parámentro "numero.value". Al ocupar menos espacio de memoria un número (propiedad ".value") que un objeto ("numero") se mejora el uso de la memoria. En este caso concreto es una diferencia irrelevante, pero es necesario acostumbrarse a tener presente siempre técnicas que optimicen el uso de memoria y demás recursos del terminal. (-0,25)
- La sentencia "if" de la línea 23 -27, se puede reducir a una sóla línea. **Busca info sobre el operador ternario y pruébalo** (-1)

Ejercicio 2 --> **no se puntúa**

- Bien comentado.
- Bootstrap mal aplicado.
- Código js mejorable.
- Ver estructura y código propuestos por el profe.
- Añadido estilos CSS en archivo .css

Ejercicio 4 --> **6,75**

- Para indicar un campo como requerido, sólo es necesario inlcuir la cláusula "required". No es necesaria una expresión (required="required") (-0.25)
- Sobra la función validarFormulario (-1,5)
- El resto de funciones se puede mejorar tanto en funcionalidad, como en legibilidad (-1,5)

Ejercicio 5 --> **10,0**

- Comentario línea 56 -> en Firefox keyCode no funciona. Devuelve 0. Por eso se usa wihch.
- Duda línea 66 -> A esa función se llega con el evento 'onmousemove'. event.client no es un evento válido. Consulta https://www.w3schools.com/js/js_events_examples.asp


Ejercicio 11 --> **8,5**

- No pasas los parámetros a las funciones (-1).
- Si pasas los parámentros correctamente, las variables de la función no son necesarias (ahorras código y memoria) (-0,5)
