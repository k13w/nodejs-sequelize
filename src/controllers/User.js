const services = require('../services');

module.exports = {
    async store(req, res) {

        try {
            const user  = await services.create(req.body)
            return res.send({ user })
        } catch (err) {
            res.status(400).send({ error: "erro ao cadastrar novo usuário"})
        }
    }
}