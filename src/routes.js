const express = require('express');
const auth = require('./controllers/Auth');
const create = require('./controllers/User');

const router = express.Router();

router.post('/auth', auth.store);
router.post('/create', create.store);

module.exports = router;