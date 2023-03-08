const { Router } = require('express');

const router = new Router();

const ADMINS = require('./admins/admins');

router.get('/admins', ADMINS.GET_ADMINS);

module.exports = router;
