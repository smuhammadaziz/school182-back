const { Router } = require('express');

const router = new Router();

const ADMINS = require('./admins/admins');
const NEWS = require('./news/news');
const CONTACT = require('./contact/contact');
const TEACHERS = require('./teachers/teachers');

router
  .get('/api/client/admins', ADMINS.GET_ADMINS)
  .get('/api/client/admins/:id', ADMINS.GET_ONE_ADMIN)
  .get('/api/client/news', NEWS.GET_ALL_NEWS)
  .get('/api/client/news/:id', NEWS.GET_ONE)
  .get('/api/client/contact', CONTACT.GET_ALL)
  .post('/api/client/contact/create', CONTACT.CREATE_FORM)
  .get('/api/client/teachers', TEACHERS.GET_ALL)
  .post('/api/client/teachers/create', TEACHERS.CREATE);

module.exports = router;
