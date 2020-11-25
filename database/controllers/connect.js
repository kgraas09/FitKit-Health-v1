const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/fitkithealth';
const { Supplemental } = require('../models/supplement.js');
const { Preworkout } = require('../models/preworkout.js');
const { Postworkout } = require('../models/postworkout.js');

const getSupplementals = (callback) => {
  return Supplemental.find((err, results) => {
    if (err) {
      console.log('Could not retrieve supplements from database.')
      callback(err, null);
    } else {
      console.log('Supplement list retrieval successful.')
      callback(null, results);
    }
  });
};

const getPreworkouts = (callback) => {
  return Preworkout.find((err, results) => {
    if (err) {
      console.log('Could not retrieve preworkout list from database.')
      callback(err, null);
    } else {
      console.log('Preworkout list retrieval successful.')
      callback(null, results);
    }
  });
};

const getPostworkouts = (callback) => {
  return Postworkout.find((err, results) => {
    if (err) {
      console.log('Could not retrieve postworkout list from database.')
      callback(err, null);
    } else {
      console.log('Postworkout list retrieval successful.')
      callback(null, results);
    }
  });
};

module.exports = {
  getSupplementals,
  getPreworkouts,
  getPostworkouts
};