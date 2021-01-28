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

function AddField(filter) {
    const fields = document.querySelector(`#${filter}s`);
    const fieldContainer = document.querySelectorAll(`.${filter}`);

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    fields.appendChild(newField);
}

function FormAction(filter) {
    if(filter == 'delete') {
        document.querySelector('.myform').action = "/admin/recipes?_method=DELETE"
    }
    if(filter == 'save') {
        document.querySelector('.myform').action = "/admin/recipes?_method=PUT"
    }
}