module.exports = app => {
  const controller = require(`../controllers/installation.controller.js`);
  app.post(`/api/cards`, controller.create);
  app.get(`/api/cards`, controller.findAll);
  app.put(`/api/cards/:id`, controller.answerCard);
};
