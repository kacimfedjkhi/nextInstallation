//import models
const Card = require(`../models/card.model.js`);

exports.create = async (req, res) => {
  console.log("in create controller!!");

  try {
    const card = new Card({
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
