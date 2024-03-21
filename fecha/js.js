// function contarOvejas() {
//     let i = 0;
//     while(i <= 100) {
//         document.write(`<strong> vamos a contar ovejas ${i} por contar <br> </strong>`);
//         i++;
//     }
//     document.write('hemos contado las ovejas')
// }
// contarOvejas();


// CONFECCIONAR UNA FUNCIÓN QUE SOLICITE LA CARGA DE DOS ENTEROS (PRIMERO EL MENOR Y LUEGO EL MAYOR) Y NOS MUESTRE DESDE EL MENOR HASTA EL MAYOR DE 1 EN 1 
// EJEMPLO:[4 Y 10]

// function myFunction() {
// let x = parseInt(prompt('Añada un número bajo'));
// let y = parseInt(prompt('Añada un número más alto'));

// for(x = x; x <= y; x++) {
//     document.write(`<strong>º${x}</strong><br>`)
// }
// }

// Crear una función de fecha, dia, mes y año (mostrarlo en la pantalla).

function myFunction() {
    let div = document.querySelector('.pito')
    let date = new Date();
    div.innerHTML = `<h1>Son las ${date.getHours()}:${date.getMinutes()}.<br>
    Hoy es el º${date.getDay()} dia de la semana. <br>
    Estamos en el º${date.getMonth() +1}mes.<br>
    Es el año: ${date.getFullYear()}.<br> </h1>`
}
myFunction()
