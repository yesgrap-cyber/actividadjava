const escribirtexto = document.getElementById("texto");
const nuevatarea = document.getElementById("escribir");
const lista = document.getElementById("lista-tareas");

texto.addEventListener("keydown", function(evento){  
    if(evento.key === "Enter"){
        const textoTarea = texto.value.trim(); 
        if(textoTarea !== ""){
            escribir.textContent = "Nueva tarea";
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            lista.appendChild(nuevaTarea);
            texto.value = '';
        } else{
            escribir.textContent = "Llena el campo."

        }
    }
});