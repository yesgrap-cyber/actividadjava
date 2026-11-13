const botonsumar = document.getElementById("sumar")
const botonreiniciar = document.getElementById("reiniciar")
let resultado = document.getElementById("resultado")
let contador = 0
function contarclicks() {
    contador+=1
    
    
    
}
botonsumar.addEventListener("click", contarclicks)