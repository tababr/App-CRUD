const express = require('express')
const path = require("path")

//Importando las rutas:
const userRoutes = require('./routes/user')

function views(document) {
    return path.join(__dirname, "views", document)
}

const app = express()

app.use(express.static(path.join(__dirname, "static")))
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Utilizando las rutas
app.use(userRoutes)

app.get('/', function (peticion, respuesta) {
    return respuesta.sendFile(views("user.html"))
})


app.listen(4000, function () {
    console.log("Funcionando... http://localhost:4000")
})