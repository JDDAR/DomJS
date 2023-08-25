let botonElemento = document.getElementById('boton_cambiar_cita');
let citaElemento = document.getElementById('cita');
let autorElemento = document.getElementById('autor');

function enteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function cambiarCita() {
    let indiceAleatorio = enteroAleatorio(0, citas.length);
    citaElemento.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElemento.innerText = citas[indiceAleatorio].autor;
}
cambiarCita()

botonElemento.addEventListener('click', cambiarCita);
