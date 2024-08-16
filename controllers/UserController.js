//Conection DB
const db = require('../database/db')

module.exports = {
    async index(req, res) {
        const results = await db('users')

        return res.json(results)
    }
}