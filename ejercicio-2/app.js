const botonsumar = document.getElementById("sumar")
const botonreiniciar = document.getElementById("reiniciar")
let resultado = document.getElementById("contador")
let contador = 0

botonsumar.addEventListener("click", function(){
    contador+=1
    resultado.innerText = contador
    if(contador >=10) {
        resultado.style.color = "green"
    }
});

botonreiniciar.addEventListener("click", function(){
    contador = 0
    resultado.innerText = contador
    resultado.style.color = "black"
});
