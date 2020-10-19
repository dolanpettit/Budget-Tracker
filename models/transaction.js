const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactions = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the transaction",
  },
  value: {
    type: Number,
    required: "Enter transaction amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
