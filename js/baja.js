var pacientes = document.querySelectorAll(".paciente"); // seleciona pacientes nativos
console.log(pacientes);

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        // console.log("Doble click realizado");
        this.remove();
    });
});