const services = require('../services');

module.exports = {
    async store(req, res) {

        try {
            const user  = await services.auth(req.body)
            console.log(user)
            if (user)
                req.body = user
        } catch (err) {
            res.status(400).send({ error: "erro ao cadastrar novo usuário"})
        }
    }
}