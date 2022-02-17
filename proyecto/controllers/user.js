const database = require("../database")
class UserController {
    async create(user) {
        const results = await database.insert('usuarios', user)
        console.log(results)
        return results
    }

    async readAll() {
        const users = await database.query("SELECT * FROM usuarios")

        return users
    }

    async delete(id) {
        const user = await database.del("usuarios", id)
        return user
    }

    async edit(id) {
        const user = await database.edi("usuarios", id)
        return user
    }
}

module.exports = UserController