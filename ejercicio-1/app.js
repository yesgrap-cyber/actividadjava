let saludo = document.getElementById("saludo")
const boton = document.getElementById("boton")
function saludar() {
    let nombre = document.getElementById("nombre").value
    console.log(nombre);
    resultado = 'Hola ' + nombre + ' Buenas noches'
    saludo.innerText = resultado
    
}
boton.addEventListener('click',saludar)