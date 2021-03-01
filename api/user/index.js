const express = require('express');
const router = express.Router();
const user = require('./user.controller');
const schemas = require('./user.schemas');
const schemaValidator = require('../../utils/validator');

router.post('/register',schemaValidator.validate(schemas.registerSchema), async (req, res) => {
    const [status, message, data] = await user.register(req.body)
    return res.status(status).send({message, data});
})

router.post('/login',schemaValidator.validate(schemas.loginSchema), async (req, res) => {
    const [status, message, data] = await user.login(req.body)
    return res.status(status).send({message, data});
})

module.exports = router;