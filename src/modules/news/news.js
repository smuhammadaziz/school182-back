const { all_news, get_one } = require('./model');

module.exports = {
  GET_ALL_NEWS: async (req, res) => {
    try {
      const allNews = await all_news();
      res.send(allNews);
    } catch (err) {
      console.log('GET ALL NEWS: ERROR', err);
    }
  },
  GET_ONE: async (req, res) => {
    try {
      const { id } = req.params;
      // console.log(id);
      const getOne = await get_one(id);
      res.send(getOne ? getOne : []);
    } catch (err) {
      console.log('GET ONE NEWS: ERROR', err);
    }
  },
};
