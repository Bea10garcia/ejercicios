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

function calcu(n){
	n= n.value;
	res = facto(n);
	document.getElementById("oculto2").innerHTML = res;
	return;
}

function facto(n){
	if (n== 0 ){
		return 1;
	} else {
		return n * facto(n-1);
	}
}

