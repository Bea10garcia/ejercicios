// Se ha considerado que se quería respetar el espacio que ocupa el parrafo. Si no quisieramos se tendría que hacer con
// display "none"

function ocultar(entrada){
    entrada.children[0].style.visibility = entrada.children[0].style.visibility == "hidden"? "visible":"hidden"
    entrada.children[1].innerHTML = entrada.children[0].style.visibility == "hidden"? "Mostrar contenidos":"Ocultar contenidos";
}

// ///////////////////////////////////////////////////////Alternativa con jQuery (solo para tercer parrafo)
$(document).ready(function(){
    $("a:last").click(function(){
        $(this).siblings().css("visibility",$(this).siblings().css("visibility")=="hidden"?"visible":"hidden");
        $(this).html($(this).siblings().css("visibility")=="hidden"? "Mostrar contenidos (alternativa jQuery)":"Ocultar contenidos (alternativa jQuery)");
    })
})