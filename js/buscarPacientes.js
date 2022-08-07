// conectar boton con js
var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    console.log("button listened");
    // petición a API
    var xhr =  new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    
    xhr.addEventListener("load",function(){
        console.log(this.responseText);
    });
    
    xhr.send();
});