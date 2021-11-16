const express = require('express');
const { redirectUrl } = require('../controllers/redirect.controller');
const router = express.Router();

router.get('/:code', redirectUrl);

module.exports = router;
