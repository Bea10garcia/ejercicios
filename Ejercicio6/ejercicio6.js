function factorial(n) {
	var i = 0;
	var fact;
	var ope;
	n=n.value;
	i= 0;
	fact= 1;
	ope="";
	for(i=0; i<n; i++){
		ope= ope + (n-i)+" x ";
		fact= fact * (n-i);
	}
	ope=ope.slice(0,-3);
	//ope=ope.substr(0, ope.length-2);
	//document.getElementById("nro").innerHTML= n;
	//document.getElementById("ope").innerHTML= ope;
	//document.getElementById("fact").innerHTML= fact;
	document.getElementById("oculto").innerHTML = n + "!=" + ope + "= " + fact;
}

/*
	Utilizamos una función auxiliar -calcu()- para llamar a la funcion recursiva 
	que calcula el factorial -facto()-.

	Esto es necesario; en lugar de llamar a la funcion recursiva directamente 
	desde HTML, porque HTM envía un objeto (inputElement) y en las llamdas 
	recursivas necesitamos un nro.

	Originalmente el código es
		function facto(n){		// En la llamada desde onclick, n es un objeto
			n=n.value			// Para poder operar, necesitamos n como valor
				.
				.
				.
			return n * facto(n-1)	// Aquí n es un valor y al llamar a la 
									// función, n=n.value falla.
		}

	Así, la primera llamada a la funcion recursiva llega un parametro objeto,
	del que es encesario obtener su propiedad "value". Sin embargo, en la llamada
	interna -...facto(n-1)- n es ya un número.

	Por tanto, vamos a utilizar una fnción secundaria para ovbiar el problema.
*/
function calcu(n){
	n= n.value;
	res = facto(n);
	document.getElementById("oculto2").innerHTML = res;
	/* Se ha escrito de la forma anterior por claridad. Se podría escribir como
	document.getElementById("oculto2").innerHTML = facto(n.value)
	*/
	return;
}

function facto(n){
	if (n== 0 ){
		return 1;
	} else {
		return n * facto(n-1);
	}
}

