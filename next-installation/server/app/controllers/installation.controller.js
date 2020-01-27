//import models
const Card = require(`../models/card.model.js`);

exports.create = async (req, res) => {
  try {
    const card = new card({
      //add card data
      theme: req.body.theme,
      text: req.body.message,
      locations: req.body.locations,
      answers: req.body.answers,
      uniqueId: req.body.uniqueId,
      pin: req.body.pin
    });

    const r = await card.save();
    res.status(200).send(r);
  } catch (err) {
    res.status(500).send(err);
  }
};
