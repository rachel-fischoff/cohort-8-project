  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  date_created: Date,
  assigned_to: { type: Schema.Types.ObjectId, ref: 'User' },
  due_date: Date,
  completed: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);