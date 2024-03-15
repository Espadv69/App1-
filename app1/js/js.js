function uno () {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = (nota1 + nota2 + nota3) /3; 

    if (resultado >= 5) {
        document.getElementById('demo').innerHTML="aprobó la asignatura";
    } else {
        document.getElementById('demo').innerHTML="suspendió la asignatura";
    }
}

function dos () {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = (nota1 + nota2 + nota3) /3; 

    if (resultado >= 5) {
        document.getElementById('demo2').innerHTML="aprobó la asignatura";
    } else {
        document.getElementById('demo2').innerHTML="suspendió la asignatura";
    }
}

function tres () {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = (nota1 + nota2 + nota3) /3; 

    if (resultado >= 5) {
        document.getElementById('demo3').innerHTML="aprobó la asignatura";
    } else {
        document.getElementById('demo3').innerHTML="suspendió la asignatura";
    }
}

function cuatro () {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = (nota1 + nota2 + nota3) /3; 

    if (resultado >= 5) {
        document.getElementById('demo4').innerHTML="aprobó la asignatura";
    } else {
        document.getElementById('demo4').innerHTML="suspendió la asignatura";
    }
}

function cinco () {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = (nota1 + nota2 + nota3) /3; 

    if (resultado >= 5) {
        document.getElementById('demo5').innerHTML="aprobó la asignatura";
    } else {
        document.getElementById('demo5').innerHTML="suspendió la asignatura";
    }
}

function seis () {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = (nota1 + nota2 + nota3) /3; 

    if (resultado >= 5) {
        document.getElementById('demo6').innerHTML="aprobó la asignatura";
    } else {
        document.getElementById('demo6').innerHTML="suspendió la asignatura";
    }
}

function estudiante () {
    let estudiante;
    estudiante = prompt('INTRODUZCA EL NOMBRE DEL ESTUDIANTE:');
    document.getElementById('estudiante').innerHTML = estudiante;
}

let ekiz = document.querySelector('.ekiz');
            
function closed(){
                
    let aviso = document.querySelector('.aviso');
    aviso.style = "display: none;";
}

ekiz.addEventListener('click', ()=>{
    console.log('nya');
})
//Math.trunc



















// 00000001 --> 1
// 00000010 --> 2
// 00000011 --> 3
// 00000100 --> 4
// 00000101 --> 5
// 00000110 --> 6
// 00000111 --> 7
// 00001000 --> 8
// 00001001 --> 9
// 00001010 --> 10
// 00001011 --> 11
// 00001100 --> 12
// 00001101 --> 13
// 00001110 --> 14
// 00001111 --> 15
// 00010000 --> 16