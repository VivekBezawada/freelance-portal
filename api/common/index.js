const express = require('express');
const router = express.Router();
const common = require('./common.controller');

router.get('/', async (req, res) => {
    const [status, message, data] = await common.get(req.user);
    return res.status(status).send({message, data});
})

router.get('/insertData', async (req, res) => {
    const [status, message, data] = await common.insertData();
    return res.status(status).send({message, data});
})

module.exports = router;