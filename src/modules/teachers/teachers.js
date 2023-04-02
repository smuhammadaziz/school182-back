const { getAll } = require('./model');

module.exports = {
  GET_ALL: async (req, res) => {
    try {
      const allTeachers = await getAll();

      res.send(allTeachers);
    } catch (err) {
      console.log('get all teachers error:', err);
    }
  },
};
