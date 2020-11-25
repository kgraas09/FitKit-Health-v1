const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postworkoutSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  flavor: String,
  servingSize: Number,
  proteinBase: String,
  other: [],
  otherIngredients: [],
});

const Postworkout = mongoose.model("Postworkout", postworkoutSchema, 'postworkouts');

module.exports = { Postworkout };