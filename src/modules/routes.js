const { Router } = require('express');

const router = new Router();

const ADMINS = require('./admins/admins');
const NEWS = require('./news/news');

router
  .get('/api/client/admins', ADMINS.GET_ADMINS)
  .get('/api/client/news', NEWS.GET_ALL_NEWS)
  .get('/api/client/news/:id', NEWS.GET_ONE);

module.exports = router;
