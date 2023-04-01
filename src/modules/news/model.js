const { fetch, fetchAll } = require('../../lib/postgres');

const ALL_NEWS = `select * from news;`;
const GET_ONE = `select * from news where id = $1;`;

const all_news = () => fetchAll(ALL_NEWS);
const get_one = id => fetch(id, GET_ONE);

module.exports = { all_news, get_one };
