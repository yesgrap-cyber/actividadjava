const colorcarta = document.getElementById("carta");
const selecolor = document.getElementById("colores");

selecolor.addEventListener("change", function(){
    if(selecolor.value === "primary"){
        colorcarta.style.backgroundColor = "blue"
        colorcarta.style.color = "white"
    } else if(selecolor.value === "success"){
        colorcarta.style.backgroundColor = "green"
    } else if(selecolor.value === "danger"){
        colorcarta.style.backgroundColor = "red"
        colorcarta.style.color = "white"
    } else if(selecolor.value === "warning"){
        colorcarta.style.backgroundColor = "yellow"
        colorcarta.style.color = "black"
    }
})
