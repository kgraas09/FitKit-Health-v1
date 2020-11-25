const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplementalSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  flavor: String,
  servingSize: Number,
  ingredients: [],
});

const Supplemental = mongoose.model("Supplemental", supplementalSchema, 'supplementals');

module.exports = { Supplemental };