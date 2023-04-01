const { fetch, fetchAll } = require('../../lib/postgres');

const GET_ALL = `select * from contact;`;
const CREATE_FORM = `insert into contact (fullName, phone, email, comment) values ($1, $2, $3, $4);`;

const getAll = () => fetchAll(GET_ALL);
const createForm = (fullName, phone, email, comment) =>
  fetch(CREATE_FORM, fullName, phone, email, comment);

module.exports = { getAll, createForm };
