const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  title: String,
  description: String,
  date_created: Date,
  tags: Array,
  author: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  comments: Array
});

module.exports = mongoose.model('Comments', CommentsSchema);