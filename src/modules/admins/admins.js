const { admins, oneAdmin, createAdmin } = require('./model');

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

      res.send(getOneAdmin ? getOneAdmin : []);
    } catch (err) {
      console.log('GET one admin error:', err);
    }
  },
  CREATE_ADMIN: async (req, res) => {
    try {
      const {
        fullName,
        lavozim,
        birth,
        birthPlace,
        millat,
        partiyaviyligi,
        malumoti,
        talim,
        photo,
      } = req.body;

      const newAdmin = await createAdmin(
        fullName,
        lavozim,
        birth,
        birthPlace,
        millat,
        partiyaviyligi,
        malumoti,
        talim,
        photo
      );

      res.send('new admin created');
    } catch (err) {
      console.log('creating new admin error: ', err);
    }
  },
};
