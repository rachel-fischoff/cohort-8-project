const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  name: String,
  date_created: Date,
  description: String,
  num_task: Number,
  num_completed: Number,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }]
});

module.exports = mongoose.model('Todos', TodosSchema);