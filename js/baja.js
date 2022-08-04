var pacientes = document.querySelectorAll(".paciente"); // seleciona pacientes nativos

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){
//         // console.log("Doble click realizado");
//         this.remove();
//     });
// });

var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});