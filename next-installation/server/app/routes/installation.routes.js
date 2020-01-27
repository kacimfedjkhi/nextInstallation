module.exports = app => {
  const controller = require(`../controllers/installation.controller.js`);
  app.post(`/api/card`, controller.create);
  app.get(`api/cards`, controller.findAll);
};
