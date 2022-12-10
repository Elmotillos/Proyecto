function horarioMañana() {

    let valores = document.getElementById("resultado");
    let horario = "";

    horario += "<table border='2'>";
    horario += "<tr>Mañana<th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr>";

    for (var i = 9; i < 15; i++) {

        horario += "<tr>";
        horario += "<th>" + i + ":00-" + (i + 2) + ":00</th>";

        for (var j = 0; j < 5; j++) {

            horario += "<td></td>";
        }

        horario += "</tr>";
        i++;
    }

    horario += "</table><br><br>";
    valores.innerHTML = horario;

}

function horarioTarde() {

    let valores = document.getElementById("resultado");
    let horario = "";

    horario += "<table border='2'>";
    horario += "<tr>Tarde<th></th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>";

    for (var i = 16; i < 21; i++) {

        horario += "<tr>";
        horario += "<th>" + i + ":00-" + (i + 1) + ":00</th>";

        for (var j = 0; j < 7; j++) {

            horario += "<td></td>";

        }

        horario += "</tr>";

    }

    horario += "</table>";
    valores.innerHTML = horario;
}