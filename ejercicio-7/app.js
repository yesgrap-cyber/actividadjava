const input = document.getElementById('password'); 
const mensaje = document.getElementById('mensaje');

input.addEventListener("input", function(){
    const longitud = input.value.length;
    if (longitud < 6){
        mensaje.textContent = "Contraseña muy corta";
        mensaje.style.color = "red";

    }else if (longitud < 10){
        mensaje.textContent = "Contraseña aceptable";
        mensaje.style.color = "yellow";

    }else {
        mensaje.textContent = "Contraseña fuerte";
        mensaje.style.color = "green"
    }
})


