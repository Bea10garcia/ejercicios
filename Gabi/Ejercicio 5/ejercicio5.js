// Funcion para determinar coordenadas del ratón respecto al navegador y toda la pantalla
function coordenadas(event) {
    var xnav;
    var ynav;
    var xpan;
    var ypan;
    xnav=event.pageX;
    ynav=event.pageY;
    xpan=event.screenX;
    ypan=event.screenY;
    document.getElementById("xnav").innerHTML = xnav;
    document.getElementById("ynav").innerHTML = ynav;
    document.getElementById("xpan").innerHTML = xpan;
    document.getElementById("ypan").innerHTML = ypan;
    document.getElementById("raton").style.backgroundColor = "white";
    document.getElementById("teclado").style.backgroundColor = "white"

}

// Cambiar color al pulsar tecla
function colorRaton(){
    document.getElementById("raton").style.backgroundColor = "#FFFFCC"
}

// Representar caractér pulsado y su código ascii
window.addEventListener("keypress", function(tecla){
    this.document.getElementById("letra").innerHTML = tecla.key;
    this.document.getElementById("codigo").innerHTML = tecla.key.charCodeAt(0);
    document.getElementById("teclado").style.backgroundColor = "#CCE6FF"
});