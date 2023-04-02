const { getAll, createTeacher, getOne } = require('./model');

module.exports = {
  GET_ALL: async (req, res) => {
    try {
      const allTeachers = await getAll();

      res.send(allTeachers);
    } catch (err) {
      console.log('get all teachers error:', err);
    }
  },
  CREATE: async (req, res) => {
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

      const newTeacher = await createTeacher(
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

      res.send('new teacher created');
    } catch (err) {
      console.log('creating new teacher error: ', err);
    }
  },
  GET_ONE_TEACHER: async (req, res) => {
    try {
      const { id } = req.params;
      const getOneTeacher = await getOne(id);

      res.send(getOneTeacher);
    } catch (err) {
      console.log('getting one teacher error', err);
    }
  },
};
