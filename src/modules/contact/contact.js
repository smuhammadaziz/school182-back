const { getAll, createForm } = require('./model');

module.exports = {
  GET_ALL: async (req, res) => {
    try {
      const allData = await getAll();
      res.send(allData);
    } catch (err) {
      console.log('get all contact form data ERROR', err);
    }
  },
  CREATE_FORM: async (req, res) => {
    try {
      const { fullName, phone, email, comment } = req.body;

      const createdForm = await createForm(fullName, phone, email, comment);

      res.send('created new form');
    } catch (err) {
      console.log('create form data ERROR: ', err);
    }
  },
};
