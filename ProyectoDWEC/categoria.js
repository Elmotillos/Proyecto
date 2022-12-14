function calcularCategoria(){
    //Año actual
    let fecha = new Date().getFullYear();
    //Año nacimiento
    let año = document.getElementById("año").value;
    //Calculo categoría
    let categoria = fecha - (parseInt(año));
    resaltarResultado(categoria);
}

function resaltarResultado(categoria){

    document.getElementById("resultado").value = categoria;

    if (categoria < 6) {
        grado = "type1";
    } else if (categoria < 8) {
        grado = "type2";
    } else if (categoria < 10) {
        grado = "type3";
    } else if (categoria < 12) {
        grado = "type4";
    } else if (categoria < 14) {
        grado = "type5";
    } else if (categoria < 16) {
        grado = "type6";
    } else if (categoria < 19) {
        grado = "type7";
    } else if (categoria < 40) {
        grado = "type8";
    } else if (categoria > 40) {
        grado = "type9";
    } 

    //Se resalta la categoría
    document.querySelectorAll(".AltRow1").forEach(e => e.style.fontWeight ="normal");
    document.querySelectorAll(`#${grado}>td`).forEach(e=>e.style.fontWeight = "bold");
}