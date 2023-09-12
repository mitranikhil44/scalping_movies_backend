const mongoose = require('mongoose');

const hollywoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
  },
});

const Hollywood = mongoose.model('Hollywood', hollywoodSchema);

module.exports = Hollywood;
