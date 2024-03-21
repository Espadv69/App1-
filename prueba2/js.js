window.onload = init;
function init() {
    document.querySelector('.emergente .botonMenor').addEventListener('click', adios);
    document.querySelector('.emergente .botonMayor').addEventListener('click', hola);
}
function adios() {
    location.href="https://www.google.es/";
}
function hola() {
    document.querySelector('.emergente').style.display="none";
    document.querySelector('#container').style.opacity="1";
}