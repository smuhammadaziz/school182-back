const { all_news, get_one, createNews } = require('./model');

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

      const getOne = await get_one(id);

      res.send(getOne ? getOne : []);
    } catch (err) {
      console.log('GET ONE NEWS: ERROR', err);
    }
  },
  CREATE_NEWS: async (req, res) => {
    try {
      const { heading, text, img1, img2 } = req.body;

      const newNews = await createNews(heading, text, img1, img2);
      console.log(newNews);

      res.send(newNews);
    } catch (err) {
      console.log('creating new news error', err);
      res.status(500).send({ error: 'Failed to create news' });
    }
  },
};
