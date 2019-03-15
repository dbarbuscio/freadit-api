const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  user: { type: String, required: false },
  score: { type: Number, required: false},
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
