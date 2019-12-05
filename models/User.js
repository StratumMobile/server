const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  gender: String,
  email: String,
  phone: String,
  pictures: Array,
  stratum: {
    yays: Number,
    nays: Number,
    score: Number
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;