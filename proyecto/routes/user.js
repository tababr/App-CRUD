const express = require("express")
const path = require("path")
const UserController = require("../controllers/user")

function views(document) {
    return path.join(__dirname, "../", "views", document)
}
const router = express.Router()
const userController = new UserController()

router.get('/registro', function (request, response) {
    return response.sendFile(views("registro.html"))
})

router.post('/registro', async function (request, response) {
    const persona = request.body
    const user = await userController.create(persona)
    if (user.success) {
        return response.redirect("/user")
    } else {
        return response.redirect("/registro")
    }
})

router.get('/editar', function (request, response) {
    return response.sendFile(views("registro.html"))
})

router.put('/editar', async function (request, response) {
    const persona = request.body
    const user = await userController.edit(persona)
    if (user.success) {
        return response.redirect("/user")
    } else {
        return response.redirect("/editar")
    }
})

router.get("/user", (req, res) => {
    return res.sendFile(views("user.html"))
})
router.get("/api/user", async (req, res) => {
    var users = await userController.readAll()
    return res.json(users)
})
router.delete("/api/user/:id", async (req, res) => {
    const id = req.params.id
    var user = await userController.delete(id)
    var users = await userController.readAll()
    return res.json(users)
})

module.exports = router