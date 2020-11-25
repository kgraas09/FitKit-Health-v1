const cors = require('cors')
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/fitkithealth';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;
const { getSupplementals, getPreworkouts, getPostworkouts } = require('../database/controllers/connect.js');

app.use(cors())
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/supplementals", (req, res) => {
  getSupplementals((err, data) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(data);
    };
  });
});

app.get("/preworkouts", (req, res) => {
  getPreworkouts((err, data) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(data);
    };
  });
});

app.get("/postworkouts", (req, res) => {
  getPostworkouts((err, data) => {
    if (err) {
      res.status(404);
    } else {
      res.status(200).send(data);
    };
  });
});

app.listen(PORT, () => {
  console.log(`Hello, Mr. Bond.  Your server is running on port ${PORT}`);
});
