let texto = document.getElementById("texto")
function escribir(){
    let escrito = document.getElementById("escrito")
    resultado = texto.value
    escrito.textContent = resultado

}
texto.addEventListener('input',escribir)