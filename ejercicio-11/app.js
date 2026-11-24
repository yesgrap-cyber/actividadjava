const formulario = document.getElementById("formulario");
const inputnombre = document.getElementById("nombre");
const inputcorreo = document.getElementById("correo");
const inputedad = document.getElementById("edad");

const errornombre = document.getElementById("error-nombre");
const errorcorreo = document.getElementById("error-correo");
const erroredad = document.getElementById("error-edad");
const exito = document.getElementById("mensaje-exito");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    errornombre.textContent = ""
    errorcorreo.textContent = ""
    erroredad.textContent = ""
    exito.textContent = ""

    const nombre = inputnombre.value.trim();
    const correo = inputcorreo.value.trim();
    const edad = inputedad.value.trim();

    let esValido = true;


    if (nombre === "") {
        errornombre.textContent = "El nombre es obligatorio";
        esValido = false;
    }

    if (correo === "") {
        errorcorreo.textContent = "El correo es obligatorio";
        esValido = false;
    } else if (!correo.includes("@")) {
        errorcorreo.textContent = "Escribe un correo válido";
        esValido = false;
    }

    if (edad === "") {
        erroredad.textContent = "Escribe una edad";
        esValido = false;
    } else if (Number(edad) < 18) {
        erroredad.textContent = "Debes tener 18 años o más";
        esValido = false;
    }
    if (esValido) {
        exito.textContent = "Registro completado correctamente";
        formulario.reset();
    }
})

