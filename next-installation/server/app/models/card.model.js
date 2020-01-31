const mongoose = require(`mongoose`);
const ObjectId = mongoose.Schema.Types.ObjectId;

const CardSchema = mongoose.Schema(
  {
    //card data
    id: ObjectId,
    theme: String,
    text: String,
    locations: [String],
    answers: [String],
    uniqueId: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(`Card`, CardSchema);
