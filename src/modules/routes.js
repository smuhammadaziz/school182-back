const { Router } = require('express');

const router = new Router();

const ADMINS = require('./admins/admins');
const NEWS = require('./news/news');

router
  .get('/api/client/admins', ADMINS.GET_ADMINS)
  .get('/api/client/news', NEWS.GET_ALL_NEWS);

module.exports = router;
