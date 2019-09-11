function genera_anno(){
    //  Inicializamos la variable pora poder agregar neuvos valores enel bucle
    var anno ='<option value ="2019">2019</option>';
    //  Añadimos las sentencias <option> hasta el 2070 
    for(var  i=2020; i<2070; i++){
        anno +='<option value ="'+ i +'">'+ i +'</option>';
    }
    //  Devolvemos todo el bloque de sentencias <option> que debe ir dentro del <select> del año
    return anno;
}

/*
    Esta función calcula los días del mes correspondientes a los lunes y domings de 
    cada semana del mes.

    Se calcula la fecha del lunes de la semana en la que cae el día 1 del mes y año 
    indicados y a partir de este, podemos calcular cada lunes y domingo de cada semana del mes.

    * param: 
        anno -> año
        mes  -> mes
    * return
        semanas -> Array con los días de mes correspondientes a cada lunes y domingo
*/
function SemanasMes(anno, mes) {
    //  Obtenemos la fecha correspondiente al día 1 del mes del año indicados
    fecha = new Date(anno, mes-1);          // objeto Date a día 1 del mes y año indicados. Enero es el mes 0. Si no se indica día, se asume 1
    lunes1 = new Date(fecha);               // contendrá la fecha del prmier lunes de la semana
    dom1 = new Date(fecha)                // auxiliar para controlar el siguiente domingo
    semanas = [];                           // Array con los lunes y domingos de cada semana del mes [l1,d1,l2,d2,l3,d3,...]
    diasem = fecha.getDay();                // Día de la semana del día 1 (0-Domingo, 1-Lunes...)

    diff = fecha.getDate() - diasem + (diasem == 0 ? -6 : 1);    // Calculo los dias desde el lunes
    diff2 = (7 - (diasem == 0 ? 6 : diasem-1))                   // Calculo los días hasta el domingo
    lunes1.setDate(diff);                   // Fecha del lunes de la semana del día 1 del mes
    dom1.setDate(diff2);                    // fecha del siguiente domingo

console.log(fecha.getDate(), "- dif ", diff, " el dia de la semana es ",diasem, " el lunes anterior es ", lunes1.getDate(), " el mes es ",lunes1.getMonth());
console.log(diff2, dom1)
    // Colocamos la primera semana ...
    blq = lunes1.getDate() + ' - ' + (dom1.getDate());
    blq += '<div class="border-top border-secondary"></div>  <!--  Simulo el <hr> pero ocupando menos en vert. -->';
    //... el nombre del mes lo sacamos a partir del desplegable
    nombremes = document.getElementById("mes").options[lunes1.getMonth()].text;  // Los meses empiezan por cero Enero->0, Feb->1 ,...
    blq += '<div id="messem1">' + nombremes + '</div>';
    document.getElementById("lundom1").innerHTML = blq;

    //... segunda semana
    
    





    return ;
}