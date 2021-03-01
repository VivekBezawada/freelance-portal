const express = require('express');
const router = express.Router();
const freelancer = require('./freelancer.controller');
const schemas = require('./freelancer.schemas');
const schemaValidator = require('../../utils/validator');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', async (req, res) => {
    const [status, message, data] = await freelancer.get(req.user);
    return res.status(status).send({message, data});
})

router.post('/', async (req, res) => {
    const [status, message, data] = await freelancer.post(req.user, req.body);
    return res.status(status).send({message, data});
})

const removeAdditionalPayload = () => {
    return (req,res,next) => {
        const key = req.params.key;
        const value = req.body[key];
        req.body = {};
        req.body[key] = value;
        next();
    }
}

router.patch('/:key', removeAdditionalPayload(), schemaValidator.validate(schemas.freelancerSchema), async (req, res) => {
    const key = req.params.key;
    const value = req.body[key];
    const [status, message, data] = await freelancer.update(req.user, key, value);
    return res.status(status).send({message, data});
})

router.put('/:key/:id', removeAdditionalPayload(), schemaValidator.validate(schemas.freelancerSchema), async (req, res) => {
    const key = req.params.key;
    const value = req.body[key];
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid URL", data :{}});
    }

    const [status, message, data] = await freelancer.update(req.user, key, value, id);
    return res.status(status).send({message, data});
})

router.delete('/:key/:id', async (req, res) => {
    const key = req.params.key;
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid URL", data :{}});
    }
    const [status, message, data] = await freelancer.update(req.user, key, null, id);
    return res.status(status).send({message, data});
})

module.exports = router;