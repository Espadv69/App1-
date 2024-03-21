// for(let i = 0; i <= 10; i++) {
//     console.log(i + ' ');
//     document.write(i + ' ');
//     alert(i + ' ');
// }


// const persona = {
//     nombre: 'Aitor',
//     apellido: 'Diaz',
//     edad: 20,
//     nacionalidad: 'España',
// }
// let texto = ' ';
// for(let i in persona) {
//     texto += persona[i] + ' ';
// }
// document.querySelector('.demo').innerHTML=texto;

// console.log(texto);

/* WHILE(condiciones) {
    linea de codigo
} */

// let x = 1;
// while(x <= 100) {
//     console.log(x);
//     document.write(`<br> ${x}`)
//     x = x+1
// }

// REALIZAR UN PROGRAMA QUE IMPRIMA 25 NÚMEROS DE LA SERIE 11-22-33-44

// let n = 0;
// while( n <= 275) {
//     console.log(n);
//     n = n +11;
// }

// CREAR UN PROGRAMA QUE MUESTRE LOS MULTIPLOS DE 8 HASTA EL VALOR 500

// let  n = 0;
// while( n <= 500) {
//     console.log(n);
//     n = n + 8;
// }

// ESCRIBE UN PROGRAMA QUE LEA 10 NOTAS DE ALUMNOS Y NOS INFORME CUANTOS TIENEN NOTAS MAYORES A 7 Y CUANTOS MENORES A 7

// let alumnosNotas = 1;
// let notasMa = 0;
// let notasMe = 0;

// while(alumnosNotas <= 10) {
//     let añadirNotas = parseFloat(prompt('escribe'))
//     if(notasMa >= 7) {
//         notasMa++
//     } else if(notasMe < 7){
//         notasMe++
//     } else {
//         alert('equivocado')
//     }
// }
// document.write(alumnosNotas);

// let x = 0;
// let cant1 = 0;
// let cant2 = 0;

// while(x<10) {
//     let nota;
//     nota = parseFloat(prompt('escribe'));
//     if(nota > 7) {
//         cant1=cant1+1;
//     } else {
//         cant2=cant2+1;
//     }
//     x = x + 1;
// }

// document.write(`<h2>cantidad de notas mayores a 7 son: ${cant1} cantidad de notas menores o iguales a 7 son: ${cant2}</h2>`);


// EN UNA EMPRESA TRABAJAN 5 EMPLEADOS CUYOS SUELDOS OSCILAN ENTRE 100 A 500, REALIZAR UN PROGRAMA QUE LEA LOS SUELDOS QUE COBRAN CADA EMPLEADO ENTRE 100 Y 300, Y CUANTO COBRAN MAS DE 300. ADEMAS EL PROGRAMA DEBERA INFORMAR EL IMPORTE QUE GASTA LA EMPRESA EN EL SUELDO DEL PERSONAL.

// let personal = 0;
// let masTres = 0;
// let menosTres = 0;
// let total = 0;
// while(personal < 5) {
//     let money;
//     money = parseFloat(prompt('ingresar sueldo'))
//     if(money > 300 && money <= 500) {
//         masTres++;
//     } else if(money <= 300){
//         menosTres++;
//     } else {
//         alert('not found');
//     }
//     total += money;
//     personal = personal + 1;
// }


// document.write(`personal que cobra mas de 300€ son:${masTres}<br>  personal que sobra menos o 300€ son:${menosTres}<br>  el total que cobran los empleados es:${total}`)


// do/while

// do{


// } while(condicion);

// ESCRIBIR UN PROGRAMA QUE SOLICITA LA CARGA DE UN NUMERO ENTRE 0 Y 999 Y NOS MUESTRE UN MENSAJE DE CUANTOS DIGITOS TIENE ESTE MISMO

// let valor;

// do{
//     valor = parseInt(prompt('ingrese un numero entero desde el 0 - 999'));
//     document.write(`El valor ${valor} tiene: `);

//     if(valor<10) {
//         document.write('tiene 1 digito');
//     } else {
//         if(valor < 100) {
//             document.write('tiene 2 digitos');
//         } else {
//             document.write('tiene 3 digitos');
//         }
//     }
// } while(valor == 0);

function press(){
let num = Number(prompt('ingrese número:'));
let guess;
let tries = 1;

guess = Math.ceil(Math.random()*100)


    while(num !== guess) {
        if(num > guess) {
         num = Number(prompt('ingrese numero menor'));
         tries++;
        } else {
         num = Number(prompt('ingrese numero mayor'));
         tries++;
        }
    }
    let div = document.querySelector('.pito');
    div.innerHTML = (`Acertaste en: <br> ${tries} intentos`);
}

let button = document.querySelector('.pito2');
button.addEventListener('click', press);