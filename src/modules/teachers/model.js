const { fetch, fetchAll } = require('../../lib/postgres');

const GET_ALL = `select * from teachers;`;
const CREATE = `insert into teachers (fullName, lavozim, birth, birthPlace, millat, partiyaviyligi, malumoti, talim, photo) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning * `;
const GET_ONE = `select * from teachers where id = $1`;

const getAll = () => fetchAll(GET_ALL);
const createTeacher = (
  fullName,
  lavozim,
  birth,
  birthPlace,
  millat,
  partiyaviyligi,
  malumoti,
  talim,
  photo
) =>
  fetch(
    CREATE,
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

const getOne = id => fetch(GET_ONE, id);

module.exports = { getAll, createTeacher, getOne };
