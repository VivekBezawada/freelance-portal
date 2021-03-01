const express = require('express');
const router = express.Router();
const project = require('./project.controller');
const proposal = require('./proposal.controller');
const schemas = require('./project.schemas');
const proposalSchemas = require('./proposal.schemas');
const schemaValidator = require('../../utils/validator');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', async (req, res) => {
    const [status, message, data] = await project.get(req.user);
    return res.status(status).send({message, data});
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid URL", data :{}});
    }
    const [status, message, data] = await project.getById(req.user, id);
    return res.status(status).send({message, data});
})

router.post('/draft', schemaValidator.validate(schemas.projectSchema), async (req, res) => {
    req.body.isActive = false;
    const [status, message, data] = await project.post(req.user, req.body);
    return res.status(status).send({message, data});
})

router.post('/', schemaValidator.validate(schemas.projectSchema), async (req, res) => {
    const [status, message, data] = await project.post(req.user, req.body);
    return res.status(status).send({message, data});
})

// Request sent by Freelancer
router.post('/:id/proposal', schemaValidator.validate(proposalSchemas.proposalSchema), async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid URL", data :{}});
    }
    const [status, message, data] = await proposal.post(req.user, id, req.body);
    return res.status(status).send({message, data});
})

router.put('/:id', schemaValidator.validate(schemas.projectSchema), async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid URL", data :{}});
    }
    const [status, message, data] = await project.update(req.user, id, req.body);
    return res.status(status).send({message, data});
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({message:"Invalid URL", data :{}});
    }
    const [status, message, data] = await project.update(req.user, id);
    return res.status(status).send({message, data});
})

module.exports = router;