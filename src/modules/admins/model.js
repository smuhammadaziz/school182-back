const { fetch, fetchAll } = require('../../lib/postgres');

const ADMINS = `select * from admins;`;

const admins = () => fetchAll(ADMINS);

module.exports = { admins };
