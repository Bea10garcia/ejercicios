//	Definiciones de los distintos biorritmos como objetos y de la matriz para tratarlos

//	Para añadir más biorritmos, añadir una nueva variable objeto con el nombre y los días de su ciclo
var biofis = {
	nombre: 'Fisico',
	dias: 23,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}

var bioemo = {
	nombre: 'Emocional',
	dias: 28,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}

var bioint = {
	nombre: 'Intelectual',
	dias: 33,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}
var bioesp = {
	nombre: 'Espiritual',
	dias: 53,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}
var biointu = {
	nombre: 'Intuicion',
	dias: 38,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}
var biocon = {
	nombre: 'Conciencia',
	dias: 48,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}
var bioest = {
	nombre: 'Estetica',
	dias: 43,
	interpretapos: 'Texto de la interpretación en zona positiva.',
	interpretaneg: 'Texto de la interpretación en zona negativa.',
	interpretacri: 'Texto de la interpretación en valor cero.'
}

//	Array para tratar todos los biorritmos desde un único punto de entrada: el array
//	Si se han añadido nuevos biorritmos como objeto, debe añadirse la variable a este array
var biorritmos = [biofis, bioemo, bioint, bioesp, biointu, biocon, bioest]

/*
	Creamos un objeto "Biorritmo" mediante una función.

	Las propiedades se asignan vía cláusula "this"
	
	A partir de la fecha de nacimiento, y el período de días calcula los valores 
		- Dia del ciclo
		- valor del biorritmo (-1..+1)
		- Valor del biorritmo porcentual.
		- Pendiente del biorritmo (+- -> True,False)
		- Valoración interpretativa del biorritmo (A.B)

	Utilizamos la forma antigua (en ES6 se hace mediante clases) por cuestiones de compatibilidad
*/ 
function Biorritmo (dias,periodo) {
	var pi = Math.PI;

	this.dias = periodo;
	this.dia = dias % periodo;
	this.bio = Math.sin(2 * pi * dias / periodo);   // valor entre [-1, 1]
	this.bioporcen = this.bio * 100;					// valor entre [-100, 100]
	// La función seno es creciente entre [0, pi/2) y entre (3*PI/2, 2*PI], que llevado al período es
	// entre [0,P/2) y entre (3*P/2,P]. En P/2 alcanza el valor máximo (+1) y en 3*P/2 el mínimo (-1),
	// siendo P la duración del período
	this.biopdte = (this.dia < (periodo / 4)) ||  (this.dia > (3 * periodo / 4));
	// Asignamos si está en la parte positiva o negativa
	this.pos = this.dia < parseInt(periodo / 2);
	// Si cruza el cero [-0,1...0,1], es crítico
	this.critico = (this.bio <= 0.1) && (this.bio >= -0.1);	
}

/*
	Esta función se encarga de crear el objeto Biorritmo, calcularlo (llamando a la función "Biorritmo") 
	y poner sus datos en su HTML correspondiente.
*/
function procesaBio(bio) {
	//	Creamos la variable
	this['bio' + bio.nombre] = new Biorritmo(dias, bio.dias); 
	//	Ponemos el día de cada ciclo
	document.getElementById('dia'+ bio.nombre).innerHTML = this['bio' + bio.nombre].dia;
	//	Ponemos los días del ciclo
	document.getElementById('dias'+ bio.nombre).innerHTML = this['bio' + bio.nombre].dias;
	//  Ponemos el valor en porcentaje y el icono de la tendencia de cada ciclo
	p = this['bio' + bio.nombre].bioporcen.toFixed(0).toString() + ' % <i class="material-icons display-6';
	p += this['bio' + bio.nombre].biopdte ? '"' : ' icon-flipped" ';     // para que la flecha apunte al lado derecho
	p += 'id="ico' + bio.nombre + '">';
	p += this['bio' + bio.nombre].biopdte ? 'call_made' : 'call_received';
	p += '</i>'
	document.getElementById('val'+ bio.nombre).innerHTML =  p;
	//	Ponemos la interpretación
	console.log(this['bio' + bio.nombre]);
	document.getElementById('data'+ bio.nombre).innerHTML = this['bio' + bio.nombre].pos ? bio.interpretapos : bio.interpretaneg;
	if (this['bio' + bio.nombre].critico) {document.getElementById('data'+ bio.nombre).innerHTML = bio.interpretacri} 
}

/*	Esta función calcula los birrtimos de una persona en la fecha actual 
	partiendo de la fecha de nacimiento.

	El nombre y los días de cada biorritmo están definidos como variables objeto de alcance global
	(al inicio del código). Además, un array contiene la lista de biorritmos (var biorritmos) para
	poder tratarlos todos desde una única función "procesaBio"

	*parametros: fecha de nacimiento.	
*/
function calcBiorritmos(fecha) {
	//	Calculamos los días vividos
	dias = moment().diff(fecha,'days');

	//	Recorremos la matriz para crear y calcular los birritmos...
	biorritmos.forEach(procesaBio);

	//	Una vez calculados todos los birritmos, hay una objeto creado para cada uno con el nombre 'bioxxxx'
	//	donde xxxx es el nombr del biorritmo (sin tildes).

	//	A partir de los valores de cada uno, se puede generar una interpretación global para poner en el 
	// 	elemento con ID='interpreta'.

	//	Se pueden procesar de uno en uno, por su nombre, o bien ponerlos en un array y procesarlos en un bucle,
	//	o bien utilizar el array 'biorritmos' y procesarlos (ver llamada forEach en 'function calcBiorritmos()' y 
	//	proceso posterior en 'function procesaBio(bio)'.)

	//	document.getElementById('interpreta').innerHTML = 'texto de la interpretación (admite etiquetas HTML)'
}

/*
	Oculta / muestra el bloque indicado

	* parametros: 
		- ver --> Boolean. 
			True -> mostrar. 
			False -> ocultar.
		- bloque --> ID del bloque sobre el que se actua
*/
function cambia(ver,bloque) {
	elem = document.getElementById(bloque);
	if (ver) {
		elem.classList.add('visible');
		elem.classList.remove('invisible')
	} else {
		elem.classList.add('invisible');
		elem.classList.remove('visible')
	}
}