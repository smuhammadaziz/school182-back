const { admins, oneAdmin } = require('./model');

module.exports = {
  GET_ADMINS: async (req, res) => {
    try {
      const allAdmins = await admins();

      res.send(allAdmins);
    } catch (err) {
      console.log('GET ALL ADMINS: ERROR', err);
      res.status(500).send('Server error');
    }
  },
  GET_ONE_ADMIN: async (req, res) => {
    try {
      const { id } = req.params;

      const getOneAdmin = await oneAdmin(id);

      res.send(getOneAdmin);
    } catch (err) {
      console.log('GET one admin error:', err);
    }
  },
};
