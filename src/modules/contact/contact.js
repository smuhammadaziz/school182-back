const { getAll, createForm } = require('./model');
const axios = require('axios');

const { Telegraf } = require('telegraf');

const bot = new Telegraf(
  process.env.BOT_TOKEN || '6036246640:AAE5KRNZz5oQ_X2wHdKMmcYFwR6GPz24-uk'
);

const chat_id = '998523755';

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

      const newForm = await createForm(fullName, phone, email, comment);

      console.log(newForm.email);

      let text = 'Sizga yangi xabar keldi: \n';
      let fName = 'Ism-Familiyasi: ' + newForm.fullname + '\n';
      let phoneNumber = 'Telefon raqami: ' + newForm.phone + '\n';
      let emailAdd = 'Email addressi: ' + newForm.email + '\n';
      let userComment = 'Izohi: ' + newForm.comment + '\n';
      let writedTime = 'Yozilgan vaqti: ' + newForm.time + '\n';

      let result = text + fName + phoneNumber + emailAdd + userComment + writedTime;

      bot.telegram.sendMessage(chat_id, result);

      res.send('created new form');
    } catch (err) {
      console.log('create form data ERROR: ', err);
      res.status(500).send('Server error');
    }
  },
};

bot.command('start', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, '182 maktab botiga hush kelibsiz', {});
});
