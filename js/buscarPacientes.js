// conectar boton con js
var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    console.log("button listened");
    // petición a API

    // objeto para hacer requesicion HTTP
    var xhr =  new XMLHttpRequest;
    
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    
    xhr.addEventListener("load",function(){
        var respuesta = xhr.responseText;
        // console.log(respuesta);
        console.log(typeof respuesta) // para saber que tipo de dato es: string

        var pacientes = JSON.parse(respuesta); //conversion a JSON

        console.log(pacientes);
        console.log(typeof pacientes); //object

        // iteracion de los pacientes obtenidos de la url
        pacientes.forEach(function(paciente){
            adicionarPacienteEnTabla(paciente);
        });
    });
    
    xhr.send();
});