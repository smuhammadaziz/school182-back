const { fetch, fetchAll } = require('../../lib/postgres');

const GET_ALL = `select * from teachers;`;

const getAll = () => fetchAll(GET_ALL);

module.exports = { getAll };
