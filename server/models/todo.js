const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: String, 
  description: String, 
  date_created: Date,
  num_tasks: Number,
  num_completed: Number,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  comments:[{ type: Schema.Types.ObjectId, ref: 'Comment' }],

});

module.exports = mongoose.model('Todo', TodoSchema);
