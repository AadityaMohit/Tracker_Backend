const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { projectId, title, description } = req.body;
  const task = await Task.create({ projectId, title, description });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { projectId } = req.query;
  const tasks = await Task.find({ projectId });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updated = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ success: true });
};
