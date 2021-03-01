const express = require('express');
const router = express.Router();
const authenticate = require('../utils/authenticate');

router.get('/health', (req,res)=> {
    return res.status(200).send()
})

const freelancer = require('../api/freelancer');
const employer = require('../api/employer');
const project = require('../api/project');
const common = require('../api/common');
const user = require('../api/user');

router.use('/freelancer', authenticate, freelancer);
router.use('/employer', authenticate, employer);
router.use('/project', authenticate, project);
router.use('/common', common);
router.use('/user', user);

module.exports = router;