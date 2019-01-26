const express = require('express');
const router = express.Router();
const aesCtrl = require('./async');

router.post('/keys', aesCtrl.KmsKeys);

module.exports = router;