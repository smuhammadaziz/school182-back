const { fetch, fetchAll } = require('../../lib/postgres');

const ALL_NEWS = `select * from news;`;
const GET_ONE = `select * from news where id = $1;`;
const CREATE_NEWS = `insert into news (heading, text, img1, img2) values ($1, $2, $3, $4) returning *`;

const all_news = () => fetchAll(ALL_NEWS);
const get_one = id => fetch(GET_ONE, id);
const createNews = (heading, text, img1, img2) =>
  fetch(CREATE_NEWS, heading, text, img1, img2);

module.exports = { all_news, get_one, createNews };
