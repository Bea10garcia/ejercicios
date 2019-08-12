// Para los mensajes de alerta se emplea la librería sweetalert

// Comprueba que el campo nombre no se queda vacio
function valnombre(nombre){
    var nombre;
    nombre = nombre.value;
    if (nombre == ""){
        document.getElementById("registro_nombre").style.border= "3px solid #fa0000";
        swal("Error", "Es necesario completar el campo de nombre", "warning");
        return false;
    } else {
        return true;
    }
}

// Comprueba que el campo nombre no se queda vacio y además cumple la expresión regular
function valemail(email){
    var email;
    var emailRegex;
    email = email.value;
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
    if (email == ""){
        document.getElementById("registro_email").style.border= "3px solid #fa0000";
        swal("Error", "Es necesario rellenar el campo de email");
        return false;
    } else if (email.match(emailRegex)){
        return true;
    } else {
        swal("Error", "El correo electrónico no cumple el formato predefinido (xxxxxxxxxx@xxxxx.com)", "warning");
        return false;
    }
}

// Comprueba que los comentarios no se quedan en blanco y que no superan los 50 caracteres
function valcomentarios(comentario){
    var comentario;
    comentario = comentario.value;
    if (comentario == ""){
        document.getElementById("registro_comentarios").style.border= "3px solid #fa0000";
        swal("Error", "Es obligatorio completar el campo de comentarios");
        return false;
    } else if (comentario.length > 50) {
        swal ("Error", "Los comentarios no pueden exceder de 50 caracteres", "warning");
        return false;
    } else {
        return true;
    }
}

// Contador de caracteres en comentario. Al superarse avisa al usuario
function contarcaract(comentario){
    var comentario;
    comentario = comentario.value;
    document.getElementById("caract").innerHTML=comentario.length;
    if (comentario.length > 50){
        document.getElementById("contador").style.color= "red";
    }
}

// Comprueba que la contraseña cumple las condiciones mediante expresión regular
function valpassword (password){
    var password;
    var passwordRegex;
    password = password.value;
    passwordRegex = /^(?=.*[a-záéíóúñ])(?=.*[A-ZÁÉÍÓÚÑ])(?=.*[0-9])\S{6,}$/;
    if (password.match(passwordRegex)){
        return true;
    } else{
        swal ("Contraseña no válida" , "La contraseña debe contener al menos 6 caracteres, de los cuales al menos debe haber una mayúscula, una minúscula y un dígito", "warning");
        return false;
    }
}

// Esta función comprueba que los datos del "registro" cumplen las condiciones. De ser así envía la información, sino devuelve false y no lo manda
function enviar(){
    var datos;
    var nombre;
    var email;
    var password;
    var comentarios;
    datos = document.getElementById("registro");
    nombre = datos.elements[1];
    email = datos.elements[3];
    password = datos.elements[4];
    comentarios = datos.elements[5];
    if (valnombre(nombre) && valemail(email) && valpassword (password) && valcomentarios(comentarios)){
        swal("¡Enhorabuena!","Formulario enviado correctamente","success");
    } else {
        return false;
    }
}