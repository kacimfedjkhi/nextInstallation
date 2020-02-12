//import models
const Card = require(`../models/card.model.js`);

exports.create = async (req, res) => {
  console.log(req.body);

  try {
    const card = new Card({
      //add card data
      theme: req.body.theme,
      text: req.body.text,
      image: req.body.image,
      locationCreated: req.body.locationCreated,
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
  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (err) {
    console.log("error", err);

    res.status(500).send({ err: err.card || "error" });
  }
};

exports.answerCard = async (req, res) => {
  try {
    // console.log("update test", req.body);

    const newAnswer = req.body.answers[req.body.answers.length - 1];
    const newLocation = req.body.locations[req.body.locations.length - 1];

    // console.log("update values", newAnswer, newLocation);

    Card.updateOne(
      { _id: req.body.id },
      {
        $push: {
          answers: newAnswer,
          locations: newLocation
        }
      }
    ).then(r => console.log(r));
  } catch (err) {
    console.log("something went wrong", err);
  }
};
