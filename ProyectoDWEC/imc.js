
function calculoIMC() {
    let alturatxt = document.getElementById("altura");
    let altura = alturatxt.value;
    let pesotxt = document.getElementById("peso");
    let peso = pesotxt.value;

    let imc = peso / (altura * altura);
    let valor = document.getElementById('resultado');
    valor.innerHTML = imc;
    resaltarResultado(imc);
}

function resaltarResultado(imc){

    document.getElementById("resultado").value = imc;

    if (imc < 16) {
        grado = "type1";
    } else if (imc >= 16 && imc <= 16.99) {
        grado = "type2";
    } else if (imc >= 17 && imc <= 18.49) {
        grado = "type3";
    } else if (imc >= 18.5 && imc <= 24.99) {
        grado = "type4";
    } else if (imc >= 25 && imc <= 29.99) {
        grado = "type5";
    } else if (imc >= 30 && imc <= 34.99) {
        grado = "type6";
    } else if (imc >= 35 && imc <= 39.99) {
        grado = "type7";
    } else if (imc > 40 ) {
        grado = "type8";
    }
    document.querySelectorAll(".AltRow1").forEach(e => e.style.fontWeight ="normal");
    document.querySelectorAll(`#${grado}>td`).forEach(e=>e.style.fontWeight = "bold");
}
