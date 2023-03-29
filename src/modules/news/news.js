const { all_news } = require('./model');

module.exports = {
  GET_ALL_NEWS: async (req, res) => {
    try {
      const allNews = await all_news();
      res.send(allNews);
    } catch (err) {
      console.log('GET ALL NEWS: ERROR', err);
    }
  },
};
