const pesoInput = document.getElementById('peso');
const estaturaInput = document.getElementById('estatura');
const calcularBtn = document.getElementById('calcular');
const textoResultado = document.getElementById('texto');

calcularBtn.addEventListener('click', function() { 
 const peso = parseFloat(pesoInput.value);
 const estatura = parseFloat(estaturaInput.value);
 if (peso !== "" && estatura !== "") {
    const resultado = peso / (estatura * estatura);
    textoResultado.innerText = "Tu IMC es " + resultado.toFixed(2); 
 } else {
    textoResultado.innerText = "Por favor, ingresa tu peso y estatura"
    
}});







