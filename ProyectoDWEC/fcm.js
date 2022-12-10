function calcularFCM(){
    const numHombre = 220;
    const numMujer = 225;
    
    //Datos formulario
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;

    //Si es hombre
    if(sexo = document.getElementById("sexo").value == "hombre"){
        
        let fcmHombre = numHombre - (parseInt(edad));
        document.getElementById("resultado").value = fcmHombre;
    
    //Si es mujer 
    }else{
        let fcmMujer = numMujer - (parseInt(edad));
        document.getElementById("resultado").value = fcmMujer;
    }
   
}