
const nombrePaciente = document.getElementById("nombrePaciente");
const nombreProcedimiento = document.getElementById("nombreProcedimiento");
const tblInfo = document.getElementById("tblInfo");

let paciente = (localStorage.getItem("paciente")) ? JSON.parse(localStorage.getItem("paciente")) : [];

let procedimiento = (localStorage.getItem("procedimiento")) ? JSON.parse(localStorage.getItem("procedimiento")) : [];

mostrarPacientes();

function guardar(){
    // console.log("entro a guardar")
   
    const pacientes = nombrePaciente.value;
    const procedi = nombreProcedimiento.value;
    paciente.push({nombre:pacientes, procedimiento:procedi});

    // console.log("escribio," , paciente);
    // console.log("escribio," , procedi);
    actualizarStorage();
    nombrePaciente.value = "";
    nombreProcedimiento.value = "";
}


function actualizarStorage(){
    localStorage.setItem("paciente", JSON.stringify(paciente));
    mostrarPacientes();
}

function mostrarPacientes(){

      
    if(paciente.length === 0 ){
        tblInfo.innerHTML = `<tr><td colspan="3" class="text-center font-weight-bold">No hay registros</td></tr>`;

    } 
     else {
        tblInfo.innerHTML = "";
        for (const pacientes of paciente)        {
            const tr = document.createElement("tr");
            tr.classList.add("text-center");

            const tdPacientes = document.createElement("td");
            tdPacientes.innerText = pacientes.nombre;
            tr.appendChild(tdPacientes);
          
            const tdProcedimiento = document.createElement("td");
            tdProcedimiento.innerText = pacientes.procedimiento;
            tr.appendChild(tdProcedimiento);

            const tdAcciones1 = document.createElement("td");

            const btnEliminar = document.createElement("button");
            btnEliminar.innerText = "Eliminar";
            btnEliminar.classList.add("btn", "btn-primary");
            btnEliminar.onclick = () => eliminar(pacientes.nombre);
            tdAcciones1.appendChild(btnEliminar);
            tr.appendChild(tdAcciones1);

            const btnEditar = document.createElement("button");
            btnEditar.innerText = "Editar";
            btnEditar.classList.add("btn", "btn-warning", "ml-2");
            btnEditar.onclick = () => editar(pacientes.nombre);
            // btnEditar.onclick = () => editar(procedi.nombre);
            tdAcciones1.appendChild(btnEditar);
            tr.appendChild(tdAcciones1);          

            tblInfo.appendChild(tr);
            
        }
    }
}



 function eliminar(pacientes) {
//   let paciente = localStorage.getItem("paciente");
paciente =  paciente.filter (item =>{
    if(item.nombre != pacientes){
        return item;

    }
    
  }
  
    )
     actualizarStorage();
}



 function editar(pacientes){
      //const paciente = paciente.nombre.indexOF(pacientes);
     paciente =  paciente.filter (item =>{
          if(item.nombre == pacientes){
             const nuevo_paciente = prompt(`Escribe el nuevo nombre para ${pacientes}`);
              item.nombre = nuevo_paciente;
             
             } 
             return item;
             } 
            
        
             )
        
         actualizarStorage();
     }
        

    // if (item.nombre == procedi)
    // { const nuevo_procedimiento = prompt(`Escribe el nuevo nombre para ${procedi}`);
    //  item.nombre = nuevo_procedimiento; }
    // else 
    //         console.log(procedimiento)
    //     procedimiento = procedimiento.filter( item => {
    //         (item.nombre == procedi);{
    //             const nuevo_procedimiento = prompt(`Escribe el nuevo nombre para ${procedi}`);
    //             item.nombre = nuevo_procedimiento;
    //         }

// function editar(pacientes){
//      procedimiento =  procedimiento.filter (item =>{
//         if(item.nombre == procedi){
//             const nuevo_procedimiento = prompt(`Escribe el nuevo nombre para ${procedi}`);
//             item.nombre = nuevo_procedimiento;

//         }
//         return item;
//       }
     
//         )

//     actualizarStorage();
// }

nombreProcedimiento.addEventListener("keypress", function (event) {
     if (event.key === "Enter") {
         event.preventDefault();
         guardar();
     }


})