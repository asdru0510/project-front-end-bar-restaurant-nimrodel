function mostrarFrmContacto(){
    document.getElementById("comuniquemonos").style.display="block";
    document.getElementById("reserva").style.display="none";

}

function mostrarFrmReserva(){
    document.getElementById("reserva").style.display="block";
    document.getElementById("comuniquemonos").style.display="none";

}

let btnSubmReser=document.getElementById("submReservar");
let btnSubmComuniq=document.getElementById("submComuniq");



btnSubmComuniq.addEventListener("click",function(){
    let nombreComuniq=document.getElementById("nombre").value;
    let motivo=document.getElementById("motivo").value;
    let correoComuniq=document.getElementById("correoC").value;
    alert(`Muchas gracias ${nombreComuniq}, hemos recibido su ${motivo} y enviaremos una pronta respuesta al correo: ${correoComuniq}.`)
})

btnSubmReser.addEventListener("click",function(){
    let nombreReser=document.getElementById("nombreReser").value;
     let correoReser=document.getElementById("correoReser").value;
    alert(`Muchas gracias ${nombreReser}, hemos recibido su reserva, enviamos una copia con los detalles a su correo: ${correoReser}.`)
})