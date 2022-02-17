let usersData = []
var users = document.getElementById("user")

function eliminar(id) {
    fetch("/api/user/" + id, {
        method: "DELETE"
    })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            usersData = data
            renderUsers()
        })
}

function renderUsers() {

    users.innerHTML = ""
    for (var user of usersData) {
        users.innerHTML = users.innerHTML + `<div class="user">
                <p class="name">${user.nombre}</p>
                <p>${user.edad}</p>
                <p>${user.genero}</p>
                <p>${user.email}</p>
                <p>${user.profesion}</p>
                <p>${user.salario}</p>               
                <a href="/editar"><button onClick="editar(${user.id})">Editar</button></a>
                <button onClick="eliminar(${user.id})">Eliminar</button>
            </div>`
    }
}
console.log("Hola mundo")
fetch("/api/user")
    .then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (data) {

        usersData = data
        renderUsers()
    })