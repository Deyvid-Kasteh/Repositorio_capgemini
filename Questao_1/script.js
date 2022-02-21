let inputdegraus = document.getElementById('degraus');
let resultado = document.getElementById('resultado');

function calcular() {
    let a = "&nbsp";
    let b = "*";
    var x = inputdegraus.value;

    let degraus = inputdegraus.value;

    for (let i = 1; i <= degraus; i++){
    
    resultado.innerHTML += `${a.repeat(degraus - i)}`+`${b.repeat( degraus - (x - i))}<br>`;

    }    

}