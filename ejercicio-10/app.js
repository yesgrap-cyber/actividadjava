const luzRoja = document.getElementById("luzRoja");
const luzAmarilla = document.getElementById("luzAmarilla");
const luzVerde = document.getElementById("luzVerde");

const mensaje = document.getElementById("mensaje");

const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");

const luces = [luzRoja, luzAmarilla, luzVerde];

function encender(luz, texto) {
  luces.forEach(function (l) {
    l.classList.remove("encendida");
  });

  luz.classList.add("encendida");

  mensaje.textContent = texto;
}

btnRojo.addEventListener("click", function (){
  encender(luzRoja, "Detente");
});

btnAmarillo.addEventListener("click", function (){
  encender(luzAmarilla, "Precaución");
});

btnVerde.addEventListener("click", function (){
  encender(luzVerde, "Puedes avanzar");
});