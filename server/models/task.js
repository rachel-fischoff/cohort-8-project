  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  title: String,
  date_created: Date,
  assigned_to: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  due_date: Date,
  completed: Boolean
});

module.exports = mongoose.model('Tasks', TasksSchema);