const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  title: String,
  description: String,
  date_created: Date,
  tags: Array,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: Array
});

module.exports = mongoose.model('Comment', CommentSchema);