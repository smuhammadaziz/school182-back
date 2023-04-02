const { fetch, fetchAll } = require('../../lib/postgres');

const GET_ALL = `select * from teachers;`;
const CREATE = `insert into teachers (fullName, lavozim, birth, birthPlace, millat, partiyaviyligi, malumoti, talim, photo) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning * `;

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

module.exports = { getAll, createTeacher };
