const saludo = document.getElementById("saludo")
const boton = document.getElementById("boton")
function saludar() {
    const nombre = document.getElementById("nombre").value
    console.log(nombre);
    const resultado = 'Hola ' + nombre + ' Buenas noches'
    saludo.innerText = resultado
    
}
boton.addEventListener('click',saludar)