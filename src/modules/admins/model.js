const { fetch, fetchAll } = require('../../lib/postgres');

const ADMINS = `select * from administrations;`;

const admins = () => fetchAll(ADMINS);

module.exports = { admins };
