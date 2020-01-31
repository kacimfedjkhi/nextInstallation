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
      uniqueId: req.body.uniqueId
    });

    const r = await card.save();
    res.status(200).send(r);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findAll = async (req, res) => {
  console.log("try to find all mi frend", req);

  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (err) {
    console.log("error", err);

    res.status(500).send({ err: err.card || "error" });
  }
};
