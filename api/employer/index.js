const express = require('express');
const router = express.Router();
const employer = require('./employer.controller');
const schemas = require('./employer.schemas');
const schemaValidator = require('../../utils/validator');

router.get('/', async (req, res) => {
    const [status, message, data] = await employer.get(req.user);
    return res.status(status).send({message, data});
})

router.post('/', schemaValidator.validate(schemas.employerSchema), async (req, res) => {
    const [status, message, data] = await employer.post(req.user, req.body);
    return res.status(status).send({message, data});
})

router.patch('/', schemaValidator.validate(schemas.employerSchema), async (req, res) => {
    const [status, message, data] = await employer.update(req.user, req.body);
    return res.status(status).send({message, data});
})

module.exports = router;