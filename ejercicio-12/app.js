const input = document.getElementById("input");
const boton = document.getElementById("boton");
const resultados = document.getElementById("resultados");
const tabla = document.querySelector(".tabla");

boton.addEventListener("click", function () {
    
    resultados.textContent = "";
    tabla.innerHTML = "";

    
    const valor = input.value.trim();

    if (valor === "") {
        resultados.textContent = "Escribe un número antes de generar la tabla";
        return;
    }

    const numero = Number(valor);

   
    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement("tr");

        const celdaOperacion = document.createElement("td");
        celdaOperacion.textContent = `${numero} × ${i}`;

        const celdaResultado = document.createElement("td");
        celdaResultado.textContent = numero * i;

        

        fila.appendChild(celdaOperacion);
        fila.appendChild(celdaResultado);
        tabla.appendChild(fila);
    }
});









