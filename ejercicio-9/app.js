const nombre = document.getElementById("nombre");
const profesion = document.getElementById("profesion");
const foto = document.getElementById("foto");

const tarjetanombre = document.getElementById("tarjetanombre");
const tarjetaprofesion = document.getElementById("tarjetaprofesion");
const tarjetafoto = document.getElementById("tarjetafoto");

const FOTO_POR_DEFECTO  = tarjetafoto.src;

nombre.addEventListener("input", function(){
    tarjetanombre.textContent = nombre.value || "Tu nombre";
});

profesion.addEventListener("input", function(){
    tarjetaprofesion.textContent = profesion.value || "Tu profesion"

});
foto.addEventListener("input", function() {
  tarjetafoto.src = foto.value || FOTO_POR_DEFECTO;
});

tarjetafoto.addEventListener("error", function(){
  tarjetafoto.src = FOTO_POR_DEFECTO;
});