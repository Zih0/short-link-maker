const express = require('express');
const redirectController = require('../controllers/redirect.controller');
const router = express.Router();

router.get('/:code', redirectController.redirectUrl);

module.exports = router;
