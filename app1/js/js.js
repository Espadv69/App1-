function uno() {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota1 + nota2 + nota3) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo').innerHTML=resultado ;
    } else {
        document.getElementById('demo').innerHTML=resultado ;
    }
}

function dos() {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota1 + nota2 + nota3) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo2').innerHTML=resultado ;
    } else {
        document.getElementById('demo2').innerHTML=resultado ;
    }
}

function tres() {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota1 + nota2 + nota3) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo3').innerHTML=resultado ;
    } else {
        document.getElementById('demo3').innerHTML=resultado ;
    }
}

function cuatro() {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota1 + nota2 + nota3) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo4').innerHTML=resultado ;
    } else {
        document.getElementById('demo4').innerHTML=resultado ;
    }
}

function cinco() {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota1 + nota2 + nota3) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo5').innerHTML=resultado ;
    } else {
        document.getElementById('demo5').innerHTML=resultado ;
    }
}

function seis() {
    let nota1, nota2, nota3;
    nota1 = parseFloat(prompt('ingrese la primera nota'));
    nota2 = parseFloat(prompt('ingrese la segunda nota'));
    nota3 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota1 + nota2 + nota3) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo6').innerHTML=resultado ;
    } else {
        document.getElementById('demo6').innerHTML=resultado ;
    }
}



function uno1() {
    let nota10, nota20, nota30;
    nota10 = parseFloat(prompt('ingrese la primera nota'));
    nota20 = parseFloat(prompt('ingrese la segunda nota'));
    nota30 = parseFloat(prompt('ingrese la tercera nota'));
    resultado1 = parseFloat((nota10 + nota20 + nota30) /3).toFixed(1); 

    if (resultado1 >= 5) {
        document.getElementById('demo7').innerHTML=resultado1 ;
    } else {
        document.getElementById('demo7').innerHTML=resultado1 ;
    }
}

function dos2() {
    let nota10, nota20, nota30;
    nota10 = parseFloat(prompt('ingrese la primera nota'));
    nota20 = parseFloat(prompt('ingrese la segunda nota'));
    nota30 = parseFloat(prompt('ingrese la tercera nota'));
    resultado1 = parseFloat((nota10 + nota20 + nota30) /3).toFixed(1); 

    if (resultado1 >= 5) {
        document.getElementById('demo8').innerHTML=resultado1 ;
    } else {
        document.getElementById('demo8').innerHTML=resultado1 ;
    }
}

function tres3() {
    let nota10, nota20, nota30;
    nota10 = parseFloat(prompt('ingrese la primera nota'));
    nota20 = parseFloat(prompt('ingrese la segunda nota'));
    nota30 = parseFloat(prompt('ingrese la tercera nota'));
    resultado1 = parseFloat((nota10 + nota20 + nota30) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo9').innerHTML=resultado1 ;
    } else {
        document.getElementById('demo9').innerHTML=resultado1 ;
    }
}

function cuatro4() {
    let nota10, nota20, nota30;
    nota10 = parseFloat(prompt('ingrese la primera nota'));
    nota20 = parseFloat(prompt('ingrese la segunda nota'));
    nota30 = parseFloat(prompt('ingrese la tercera nota'));
    resultado1 = parseFloat((nota10 + nota20 + nota30) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo10').innerHTML=resultado1 ;
    } else {
        document.getElementById('demo10').innerHTML=resultado1 ;
    }
}

function cinco5() {
    let nota10, nota20, nota30;
    nota10 = parseFloat(prompt('ingrese la primera nota'));
    nota20 = parseFloat(prompt('ingrese la segunda nota'));
    nota30 = parseFloat(prompt('ingrese la tercera nota'));
    resultado1 = parseFloat((nota10 + nota20 + nota30) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo11').innerHTML=resultado1 ;
    } else {
        document.getElementById('demo11').innerHTML=resultado1 ;
    }
}

function seis6() {
    let nota10, nota20, nota30;
    nota10 = parseFloat(prompt('ingrese la primera nota'));
    nota20 = parseFloat(prompt('ingrese la segunda nota'));
    nota30 = parseFloat(prompt('ingrese la tercera nota'));
    resultado = parseFloat((nota10 + nota20 + nota30) /3).toFixed(1); 

    if (resultado >= 5) {
        document.getElementById('demo12').innerHTML=resultado1 ;
    } else {
        document.getElementById('demo12').innerHTML=resultado1 ;
    }
}

function total() {

    let media = parseFloat((matematicas + quimica + fisica + informatica + biologia + ingles)/6).toFixed(1);

    let matematicas, quimica, fisica, informatica, biologia, ingles;
    matematicas = document.getElementById('demo7').innerHTML;
    quimica = document.getElementById('demo8').innerHTML;
    fisica = document.getElementById('demo9').innerHTML;
    informatica = document.getElementById('demo10').innerHTML;
    biologia = document.getElementById('demo11').innerHTML;
    ingles = document.getElementById('demo12').innerHTML;



    if (media >= 5) {
        document.write('aprobado')
    } else {
        document.write('suspenso')
    }


}

function estudiante() {
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