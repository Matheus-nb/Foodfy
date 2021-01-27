function ChangePath (index) {
    window.location = `recipes/${index}`
}

function ShowNot(filter) {
    document.querySelector(`.${filter}  ul, .${filter} p`).classList.toggle("hide");
    if(document.querySelector(`.${filter} ul, .${filter}  p`).classList.contains("hide")) {
        document.querySelector(`.${filter} span`).innerHTML = "Mostrar"
    } else {
        document.querySelector(`.${filter} span`).innerHTML = "Esconder"
    }
}