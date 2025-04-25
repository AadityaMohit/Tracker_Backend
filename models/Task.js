const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  title: String,
  description: String,
  status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
  dateCreated: { type: Date, default: Date.now },
  dateCompleted: Date
});

module.exports = mongoose.model('Task', taskSchema);
