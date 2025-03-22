// datos globales
let HistorialOperaciones = JSON.parse(localStorage.getItem("HistorialOperaciones")) || [];
let HistorialOrdenado =  HistorialOperaciones.reverse()

let p; // para crear un elemento 

function AñadirValor(value){
    let valores = document.querySelector(".valores")
    valores.value  +=  value
}

 function EliminarTodosCarateres(){
    let valores = document.querySelector(".valores");
    valores.value = ""
 }

 // eliminar elemento por elemento 
function borrarUltimoDigito(){
    let valores = document.querySelector(".valores");
    valores.value = valores.value.slice(0,-1)
}


function EliminarHistorial (){
    localStorage.removeItem("HistorialOperaciones"); // Borra del localStorage
    HistorialOperaciones = []; // Reinicia el array en memoria
    document.querySelector(".Historial").innerHTML = ""; // Borra del HTML
}



function MostraHistoral (){
    let historialUser = document.querySelector(".Historial")  
    historialUser.innerHTML = "";
   
     HistorialOrdenado.forEach((operacion) => {
        let p = document.createElement("p");
        p.classList.add("Historial-value");
        p.textContent = operacion;
        historialUser.appendChild(p);
    });
}



function resultado() {
    let valores = document.querySelector(".valores");
    let  prevValores =  valores.value 
    if(prevValores.length === 0 ) return
    try {
        let resultado = new Function(`return ${valores.value}`)(); // es mejor que el eval() ya que evita insercion de cosas malisisosas
        valores.value = resultado;

        HistorialOperaciones.push(`${prevValores} =  ${resultado}`)
        localStorage.setItem("HistorialOperaciones", JSON.stringify(HistorialOperaciones));
        MostraHistoral ()
    } catch (e) {
        valores.value = "No se puedo resolver";

    }
}

MostraHistoral();