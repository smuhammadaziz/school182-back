const { fetch, fetchAll } = require('../../lib/postgres');

const ADMINS = `select * from admins;`;
const ONE_ADMIN = `select * from admins where id = $1`;
const CREATE_NEW = `insert into admins (fullName, lavozim, birth, birthPlace, millat, partiyaviyligi, malumoti, talim, photo) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *  `;

const admins = () => fetchAll(ADMINS);
const oneAdmin = id => fetch(ONE_ADMIN, id);
const createAdmin = (
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
    CREATE_NEW,
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

module.exports = { admins, oneAdmin, createAdmin };
