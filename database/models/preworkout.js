const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preworkoutSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  flavor: String,
  servingSize: Number,
  primaryStimulant: String,
  other: [],
  otherIngredients: [],
});

const Preworkout = mongoose.model("Preworkout", preworkoutSchema, 'preworkouts');

module.exports = { Preworkout };