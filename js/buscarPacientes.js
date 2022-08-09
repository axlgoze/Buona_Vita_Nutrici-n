// conectar boton con js
var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    console.log("button listened");
    // petición a API

    // objeto para hacer requesicion HTTP
    var xhr =  new XMLHttpRequest;
    //abriendo peticion
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    //adicionando evento para cargar
    xhr.addEventListener("load",function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            var respuesta = xhr.responseText; //muestra el contenido obtenido de la URL
            // console.log(respuesta);
            console.log(typeof respuesta) // para saber que tipo de dato es: string
    
            var pacientes = JSON.parse(respuesta); //conversion de string a JSON
    
            // iteracion de los pacientes obtenidos de la url
            pacientes.forEach(function(paciente){
                adicionarPacienteEnTabla(paciente);
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});