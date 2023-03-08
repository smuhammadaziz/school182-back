const { admins } = require('./model');

module.exports = {
  GET_ADMINS: async (req, res) => {
    try {
      const allAdmins = await admins();
      res.send(allAdmins);
    } catch (err) {
      console.log('GET ALL ADMINS: ERROR', err);
    }
  },
};
