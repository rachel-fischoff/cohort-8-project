const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
  group_name: String,
  group_type: String,
  people: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

module.exports = mongoose.model('Group', groupSchema)