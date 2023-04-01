const { getAll, createForm } = require('./model');
const axios = require('axios');

const { Telegraf } = require('telegraf');

// const BOT_TOKEN = '6036246640:AAE5KRNZz5oQ_X2wHdKMmcYFwR6GPz24-uk';

const bot = new Telegraf(
  process.env.BOT_TOKEN || '6036246640:AAE5KRNZz5oQ_X2wHdKMmcYFwR6GPz24-uk'
);

bot.launch();
module.exports = {
  GET_ALL: async (req, res) => {
    try {
      const allData = await getAll();
      res.send(allData);
    } catch (err) {
      console.log('get all contact form data ERROR', err);
    }
  },
  CREATE_FORM: async (req, res) => {
    try {
      const { fullName, phone, email, comment } = req.body;

      const createdForm = await createForm(fullName, phone, email, comment);

      res.send('created new form');
    } catch (err) {
      console.log('create form data ERROR: ', err);
    }
  },
};

bot.command('start', ctx => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    'Welcome to the Code Capsules telegram bot.\nI respond to /ethereum. Please try it',
    {}
  );
});

bot.command('show', ctx => {
  var rate;
  console.log(ctx.from);
  axios.get(`http://localhost:4444/api/client/contact/`).then(response => {
    console.log(response.data);
    rate = response.data;
    const message = `sizga yangi xabar keldi`;
    bot.telegram.sendMessage(ctx.chat.id, message, {});
  });
});
