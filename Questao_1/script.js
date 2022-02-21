let inputdegraus = document.getElementById('degraus');
let resultado = document.getElementById('resultado');

function calcular() {
    let a = " ";
    let b = "*";
    var x = inputdegraus.value;

    let degraus = inputdegraus.value;

    for (let i = 1; i <= degraus; i++){
    console.log(`${a.repeat(degraus - i)}`+`${b.repeat( degraus - (x - i))}`);

    }    

}