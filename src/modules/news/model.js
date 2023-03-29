const { fetch, fetchAll } = require('../../lib/postgres');

const ALL_NEWS = `select * from news;`;

const all_news = () => fetchAll(ALL_NEWS);

module.exports = { all_news };
