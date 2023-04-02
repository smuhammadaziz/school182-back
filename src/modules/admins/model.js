const { fetch, fetchAll } = require('../../lib/postgres');

const ADMINS = `select * from admins;`;
const ONE_ADMIN = `select * from admins where id = $1`;

const admins = () => fetchAll(ADMINS);
const oneAdmin = id => fetch(ONE_ADMIN, id);

module.exports = { admins, oneAdmin };
